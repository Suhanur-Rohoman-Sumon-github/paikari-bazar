/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";

type FormData = {
  nameBangla: string;
  nameEnglish: string;
  idNumber: string;
  pinNumber: string;
  fatherName: string;
  spouseName: string;
  motherName: string;
  birthPlace: string;
  birthDate: string;
  principalDate: string;
  bloodGroup: string;
  address: string;
};

const IDCardComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nameBangla: "",
    nameEnglish: "",
    idNumber: "",
    pinNumber: "",
    fatherName: "",
    spouseName: "",
    motherName: "",
    birthPlace: "",
    birthDate: "",
    principalDate: "",
    bloodGroup: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setState(URL.createObjectURL(file));
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    if (pdfFile) {
      console.log("Uploaded PDF File:", pdfFile.name);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-400 rounded-lg p-6 hover:bg-gray-100 transition-all duration-200">
          <input
            id="pdfUploader"
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
            className="hidden"
          />
          <label
            htmlFor="pdfUploader"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Image
              src="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png"
              alt="Upload PDF"
              className="h-20 w-20 mb-4"
              width={100}
              height={100}
            />
            <p className="text-lg font-semibold text-indigo-500">
              সাইন কপি আপলোড করুন অথবা পিডিএফ ফাইল নির্বাচিত করতে ক্লিক করুন
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Supported formats: <span className="font-medium">PDF</span>
            </p>
          </label>
          {pdfFile && (
            <p className="text-sm text-gray-600 mt-4">
              Selected File: <span className="font-medium">{pdfFile.name}</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setProfileImage)}
            />
            {profileImage && (
              <Image
                src={profileImage}
                alt="Profile"
                className="mt-2 h-20 w-20 object-cover rounded-full"
                width={100}
                height={100}
              />
            )}
          </div>

          {/* Signature Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Signature Image
            </label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setSignatureImage)}
            />
            {signatureImage && (
              <Image
                src={signatureImage}
                alt="Signature"
                className="mt-2 h-10 object-cover"
                width={100}
                height={100}
              />
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700"
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <Input
                type="text"
                id={key}
                name={key}
                value={(formData as any)[key]} // Explicitly cast to access dynamic keys
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default IDCardComponent;
