import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Certificates() {
  const [activePdf, setActivePdf] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);
  const [pdfError, setPdfError] = useState("");

  const certificates = [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google / Coursera",
      date: "Feb 2026",
      logo: "/logos/google.svg",
      pdf: "/certificates/Certificado de google coursea- curso UX designer.pdf",
      bullets: [
        "Diseño centrado en el usuario",
        "Investigación, prototipado y pruebas",
        "Principios UX para productos digitales",
      ],
    },
    {
      title: "Certificado Matlapt",
      issuer: "Matlapt Academy",
      logo: "/logos/matlapt.svg",
      date: "Mar 2025",
      pdf: "/certificates/certificate.pdf",
      bullets: [
        "Análisis de datos y visualización",
        "Automatización de informes",
        "Buenas prácticas en modelado de datos",
      ],
    },
    {
      title: "Certificado Coursera",
      issuer: "Coursera",
      logo: "/logos/coursera.svg",
      date: "Jul 2024",
      pdf: "/certificates/Coursera 6XS8B7QPNV4A.pdf",
      bullets: [
        "Gestión de proyectos digitales",
        "Optimización de flujos de trabajo",
        "Certificación profesional válida",
      ],
    },
    {
      title: "Certificado Profesional - TI",
      issuer: "Institución Certificadora",
      logo: "/logos/institution.svg",
      date: "Dic 2023",
      pdf: "/certificates/9544002633285TI1114542269C.pdf",
      bullets: [
        "Tecnología de la información",
        "Competencias profesionales verificadas",
        "Registro y validación internacional",
      ],
    },
    {
      title: "Certificado de Especialización - TI",
      issuer: "Institución Certificadora",
      logo: "/logos/institution.svg",
      date: "Nov 2023",
      pdf: "/certificates/9544002633285TI1114542269E.pdf",
      bullets: [
        "Especialización en tecnología",
        "Desarrollo de habilidades técnicas",
        "Certificación profesional reconocida",
      ],
    },
    {
      title: "Certificado Avanzado Coursera",
      issuer: "Coursera",
      logo: "/logos/coursera.svg",
      date: "Sep 2023",
      pdf: "/certificates/Coursera SLZRNYI9VLSX.pdf",
      bullets: [
        "Formación avanzada en línea",
        "Completación de programa especializado",
        "Credenciales verificables",
      ],
    },
  ];

  const openPdfInViewer = async (cert) => {
    setPdfError("");
    setIsLoadingPdf(true);
    setActiveTitle(cert.title);

    try {
      const response = await fetch(encodeURI(cert.pdf));
      if (!response.ok) throw new Error("No se pudo cargar el PDF");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (pdfBlobUrl) {
        URL.revokeObjectURL(pdfBlobUrl);
      }

      setPdfBlobUrl(url);
      setActivePdf(cert.pdf);
    } catch (error) {
      setPdfError("No se pudo cargar el certificado. Intenta de nuevo.");
      setActivePdf(null);
      setActiveTitle("");
    } finally {
      setIsLoadingPdf(false);
    }
  };

  const closePdfViewer = () => {
    setActivePdf(null);
    setActiveTitle("");
    setPdfError("");

    if (pdfBlobUrl) {
      URL.revokeObjectURL(pdfBlobUrl);
      setPdfBlobUrl(null);
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closePdfViewer();
      }
    };

    if (activePdf) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [activePdf]);

  return (
    <section className="projects-section certificates-section">
      <div className="section-header">
        <span>Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="certificates-container">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          loopAdditionalSlides={certificates.length * 3}
          grabCursor={true}
          navigation={true}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
            scale: 0.9,
          }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <article className="certificate-card">
                <div className="certificate-top">
                  <div className="certificate-logo-wrapper">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="certificate-logo"
                    />
                  </div>
                  <div className="certificate-headline">
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <h3>{cert.title}</h3>
                    <p className="certificate-date">{cert.date}</p>
                  </div>
                </div>

                <ul className="certificate-bullets">
                  {cert.bullets.map((item, bulletIndex) => (
                    <li key={bulletIndex}>{item}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="certificate-button"
                  onClick={() => openPdfInViewer(cert)}
                >
                  Ver certificado
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activePdf && (
        <div className="pdf-modal" role="dialog" aria-modal="true">
          <div className="pdf-modal-backdrop" onClick={closePdfViewer} />

          <div className="pdf-modal-content">
            <div className="pdf-modal-header">
              <p className="certificate-issuer">{activeTitle}</p>

              <button
                type="button"
                className="pdf-modal-close"
                onClick={closePdfViewer}
              >
                ×
              </button>
            </div>

            {isLoadingPdf ? (
              <div className="pdf-loading">Cargando certificado...</div>
            ) : pdfError ? (
              <div className="pdf-error">{pdfError}</div>
            ) : (
              <iframe
                src={`${pdfBlobUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title={activeTitle}
                className="pdf-viewer"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}