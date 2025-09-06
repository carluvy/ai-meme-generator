"use client";
import React, { useState } from "react";
import {uploadFile} from "@/app/utils/api";
import { Input } from '@/app/components/ui/input';
import Image from "next/image";

export default function UploadBox() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [serverResponse, setServerResponse] = useState<never>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        try {
            setUploading(true);
            const res = await uploadFile(selectedFile);
            setServerResponse(res);
        } catch (error) {
            console.error(error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                // className="hidden"
                className="p-2.5 border rounded-2xl border-gray-300/80 bg-white text-base text-gray-700 shadow-sm transition-all duration-200 file:mr-4 file:rounded-xl"
                />
            {previewUrl && (
                <Image
                    src={previewUrl}
                    alt="preview"
                    className="object-cover rounded-lg border"
                    width={200}
                    height={200}
                    // sizes="100vw"
                    priority
                    />
            )}

            <button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="px-10 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
                // className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                {uploading ? "uploading..." : "Upload"}
            </button>

            {serverResponse && (

                <pre className="mt-4 p-2 bg-gray-600 rounded text-sm">

                          {JSON.stringify(serverResponse, null, 2)}

                </pre>
            )}
        </div>
    )
}