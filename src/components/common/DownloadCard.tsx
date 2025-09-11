import React from "react";
import { Download } from "lucide-react";

interface DownloadCardProps {
  title: string;
  fileUrl: string;
  description?: string;
}

export default function DownloadCard({ title, fileUrl, description }: DownloadCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
      <a
        href={fileUrl}
        download
        className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
      >
        <Download size={18} /> Download
      </a>
    </div>
  );
}
