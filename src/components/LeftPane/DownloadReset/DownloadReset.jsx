import React, { useContext } from "react";
import styles from "./DownloadReset.module.css";
import Button from "../../UI/Button/Button";
import ResumeContext from "../../Contexts/ResumeContext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadReset() {
  const updateResumeData = useContext(ResumeContext);

  const downloadPdf = async () => {
    const componentRef = document.getElementById("resume");
    const canvas = await html2canvas(componentRef);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("download.pdf");
  };

  const resetResumeClickHandler = () => {
    updateResumeData({
      education: [],
      experience: [],
      contact: {},
    });
  };

  return (
    <div className={styles.flexContainer}>
      <Button text="Download Resume" onButtonClick={downloadPdf} />
      <Button
        type="reset"
        text="Reset Resume"
        onButtonClick={resetResumeClickHandler}
      />
    </div>
  );
}
