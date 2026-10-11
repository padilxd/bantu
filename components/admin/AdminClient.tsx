"use client";

import { useState } from "react";
import type { Tutorial, TutorialCategory, Device } from "@/types/tutorial";
import { tutorials as initialTutorials } from "@/data/tutorials";
import {
  getCategoryLabel,
  getDeviceLabel,
  formatEstimatedTime,
} from "@/lib/utils";

type AdminView = "list" | "add" | "edit";

const EMPTY_FORM = {
  title: "",
  slug: "",
  description: "",
  category: "whatsapp" as TutorialCategory,
  estimatedTime: 5,
  devices: [] as Device[],
};

type TutorialForm = typeof EMPTY_FORM;

export default function AdminClient() {
  const [tutorialList, setTutorialList] = useState<Tutorial[]>(initialTutorials);
  const [view, setView] = useState<AdminView>("list");
  const [editTarget, setEditTarget] = useState<Tutorial | null>(null);
  const [form, setForm] = useState<TutorialForm>(EMPTY_FORM);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  function showSuccess(msg: string) {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  }

  function openAdd() {
    setForm(EMPTY_FORM);
    setEditTarget(null);
    setView("add");
  }

  function openEdit(tutorial: Tutorial) {
    setForm({
      title: tutorial.title,
      slug: tutorial.slug,
      description: tutorial.description,
      category: tutorial.category,
      estimatedTime: tutorial.estimatedTime,
      devices: [...tutorial.devices],
    });
    setEditTarget(tutorial);
    setView("edit");
  }

  function handleDelete(id: string) {
    setTutorialList((prev) => prev.filter((t) => t.id !== id));
    setDeleteConfirm(null);
    showSuccess("Tutorial berhasil dihapus.");
  }

  function handleSave() {
    if (!form.title.trim() || !form.slug.trim()) return;

    if (view === "add") {
      const newTutorial: Tutorial = {
        id: Date.now().toString(),
        title: form.title.trim(),
        slug: form.slug.trim(),
        description: form.description.trim(),
        category: form.category,
        thumbnail: "",
        devices: form.devices.length > 0 ? form.devices : ["android"],
        estimatedTime: form.estimatedTime,
        steps: { android: [], iphone: [], laptop: [] },
      };
      setTutorialList((prev) => [newTutorial, ...prev]);
      showSuccess("Tutorial berhasil ditambahkan.");
    } else if (view === "edit" && editTarget) {
      setTutorialList((prev) =>
        prev.map((t) =>
          t.id === editTarget.id
            ? {
                ...t,
                title: form.title.trim(),
                slug: form.slug.trim(),
                description: form.description.trim(),
                category: form.category,
                estimatedTime: form.estimatedTime,
                devices: form.devices.length > 0 ? form.devices : t.devices,
              }
            : t
        )
      );
      showSuccess("Tutorial berhasil diperbarui.");
    }

    setView("list");
    setEditTarget(null);
  }

  function toggleDevice(device: Device) {
    setForm((prev) => ({
      ...prev,
      devices: prev.devices.includes(device)
        ? prev.devices.filter((d) => d !== device)
        : [...prev.devices, device],
    }));
  }

  const ALL_CATEGORIES: TutorialCategory[] = [
    "whatsapp",
    "email",
    "file",
    "browser",
    "lainnya",
  ];
  const ALL_DEVICES: Device[] = ["android", "iphone", "laptop"];

  return (
    <div className="flex flex-col gap-6">
      {/* Success toast */}
      {successMsg && (
        <div
          role="status"
          aria-live="polite"
          className="bg-green-50 border border-green-300 text-green-800 text-sm font-medium px-4 py-3 rounded-xl flex items-center gap-2"
        >
          <span aria-hidden="true">✅</span> {successMsg}
        </div>
      )}

      {/* List view */}
      {view === "list" && (
        <>
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {tutorialList.length} tutorial tersedia
            </p>
            <button
              onClick={openAdd}
              className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
              aria-label="Tambah tutorial baru"
            >
              + Tambah Tutorial
            </button>
          </div>

          {/* Table / card list */}
          {tutorialList.length === 0 ? (
            <div
              role="status"
              className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
            >
              <p className="text-4xl mb-3" aria-hidden="true">📭</p>
              <p className="font-semibold text-gray-700">Belum ada tutorial</p>
              <p className="text-sm text-gray-500">Tambahkan tutorial pertama kamu.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {tutorialList.map((tutorial) => (
                <AdminTutorialRow
                  key={tutorial.id}
                  tutorial={tutorial}
                  onEdit={() => openEdit(tutorial)}
                  onDeleteRequest={() => setDeleteConfirm(tutorial.id)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Add / Edit form */}
      {(view === "add" || view === "edit") && (
        <TutorialForm
          form={form}
          setForm={setForm}
          view={view}
          allCategories={ALL_CATEGORIES}
          allDevices={ALL_DEVICES}
          onToggleDevice={toggleDevice}
          onSave={handleSave}
          onCancel={() => setView("list")}
        />
      )}

      {/* Delete confirm dialog */}
      {deleteConfirm && (
        <DeleteConfirmDialog
          onConfirm={() => handleDelete(deleteConfirm)}
          onCancel={() => setDeleteConfirm(null)}
          tutorialTitle={
            tutorialList.find((t) => t.id === deleteConfirm)?.title ?? ""
          }
        />
      )}
    </div>
  );
}

/* ── Sub-components ── */

function AdminTutorialRow({
  tutorial,
  onEdit,
  onDeleteRequest,
}: {
  tutorial: Tutorial;
  onEdit: () => void;
  onDeleteRequest: () => void;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 text-sm truncate">
          {tutorial.title}
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-400">
          <span className="bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5 font-medium">
            {getCategoryLabel(tutorial.category)}
          </span>
          <span>{formatEstimatedTime(tutorial.estimatedTime)}</span>
          <span>
            {tutorial.devices.map(getDeviceLabel).join(", ")}
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-1 font-mono">/{tutorial.slug}</p>
      </div>

      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={onEdit}
          className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors"
          aria-label={`Edit tutorial ${tutorial.title}`}
        >
          Edit
        </button>
        <button
          onClick={onDeleteRequest}
          className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-colors"
          aria-label={`Hapus tutorial ${tutorial.title}`}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

function TutorialForm({
  form,
  setForm,
  view,
  allCategories,
  allDevices,
  onToggleDevice,
  onSave,
  onCancel,
}: {
  form: TutorialForm;
  setForm: React.Dispatch<React.SetStateAction<TutorialForm>>;
  view: AdminView;
  allCategories: TutorialCategory[];
  allDevices: Device[];
  onToggleDevice: (d: Device) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const isValid = form.title.trim() !== "" && form.slug.trim() !== "";

  return (
    <section aria-labelledby="form-heading">
      <h2 id="form-heading" className="text-lg font-bold text-gray-800 mb-6">
        {view === "add" ? "Tambah Tutorial Baru" : "Edit Tutorial"}
      </h2>

      <div className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <label
            htmlFor="field-title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Judul Tutorial <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="field-title"
            type="text"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Contoh: Cara Mengirim PDF lewat WhatsApp"
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
            aria-required="true"
          />
        </div>

        {/* Slug */}
        <div>
          <label
            htmlFor="field-slug"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Slug URL <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <div className="flex items-center rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-green-500 overflow-hidden">
            <span className="px-3 py-2.5 bg-gray-50 text-gray-400 text-sm border-r border-gray-300 select-none">
              /tutorial/
            </span>
            <input
              id="field-slug"
              type="text"
              value={form.slug}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  slug: e.target.value
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, ""),
                }))
              }
              placeholder="kirim-pdf-whatsapp"
              className="flex-1 px-3 py-2.5 text-sm text-gray-800 focus:outline-none bg-white"
              required
              aria-required="true"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="field-desc"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Deskripsi
          </label>
          <textarea
            id="field-desc"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            placeholder="Penjelasan singkat tentang tutorial ini..."
            rows={3}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="field-category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kategori
          </label>
          <select
            id="field-category"
            value={form.category}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                category: e.target.value as TutorialCategory,
              }))
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {getCategoryLabel(cat)}
              </option>
            ))}
          </select>
        </div>

        {/* Estimated Time */}
        <div>
          <label
            htmlFor="field-time"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Estimasi Waktu (menit)
          </label>
          <input
            id="field-time"
            type="number"
            min={1}
            max={60}
            value={form.estimatedTime}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                estimatedTime: Math.max(1, Number(e.target.value)),
              }))
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Devices */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Perangkat yang Didukung
          </legend>
          <div className="flex gap-3">
            {allDevices.map((device) => {
              const checked = form.devices.includes(device);
              return (
                <label
                  key={device}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm cursor-pointer transition-all ${
                    checked
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleDevice(device)}
                    className="sr-only"
                    aria-label={getDeviceLabel(device)}
                  />
                  {getDeviceLabel(device)}
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={onCancel}
            className="flex-1 py-3 px-4 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onSave}
            disabled={!isValid}
            className="flex-1 py-3 px-4 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-colors"
            aria-label={view === "add" ? "Simpan tutorial baru" : "Simpan perubahan"}
          >
            {view === "add" ? "Tambah Tutorial" : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </section>
  );
}

function DeleteConfirmDialog({
  tutorialTitle,
  onConfirm,
  onCancel,
}: {
  tutorialTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
        <div>
          <h2
            id="delete-dialog-title"
            className="text-lg font-bold text-gray-800 mb-1"
          >
            Hapus Tutorial?
          </h2>
          <p className="text-sm text-gray-600">
            Kamu akan menghapus{" "}
            <span className="font-semibold">{tutorialTitle}</span>. Tindakan
            ini tidak bisa dibatalkan.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 px-4 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
            aria-label="Konfirmasi hapus tutorial"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
