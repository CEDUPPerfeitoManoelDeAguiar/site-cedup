import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Sobre from "./Pages/NossaHistoria"
import Footer from "./Components/Footer";
import React from "react";
import './App.css';
import NovosCursos from "./Pages/NovosCursos";
import Cursos from "./Pages/Cursos";
import RecursosHumanos from "./Pages/Cursos/RecursosHumanos";
import Gremio from "./Pages/Gremio";
import DesenvolvimentoSistemas from "./Pages/Cursos/DesenvolvimentoDeSistemas";
import Logistica from "./Pages/Cursos/Logistica";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const LayoutWithHeader = ({ children }) => (
  <>
    <Header />
   
    <AnimatedPage>{children}</AnimatedPage>

     <Footer />
  </>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutWithHeader><Home /></LayoutWithHeader>} />
          <Route path="/sobre" element={<LayoutWithHeader><Sobre /></LayoutWithHeader>} />
          <Route path="/novos-cursos" element={<LayoutWithHeader><NovosCursos /></LayoutWithHeader>} />
          <Route path="/cursos" element={<LayoutWithHeader><Cursos /></LayoutWithHeader>} />
          <Route path="/recursoshumanos" element={<LayoutWithHeader><RecursosHumanos /></LayoutWithHeader>} />
          <Route path="/gremio" element={<LayoutWithHeader><Gremio /></LayoutWithHeader>} />
          <Route path="/desenvolvimento-sistemas" element={<LayoutWithHeader><DesenvolvimentoSistemas /></LayoutWithHeader>} />7
          <Route path="/logistica" element={<LayoutWithHeader><Logistica /></LayoutWithHeader>} />
      </Routes>
    </AnimatePresence>
  );
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default RoutesApp;