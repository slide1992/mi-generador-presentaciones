const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta SIMPLIFICADA para probar primero
app.post('/api/generate-slides', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    console.log('✅ Backend recibió:', prompt);
    
    // DATOS DE PRUEBA - Eliminamos OpenAI temporalmente
    const testSlides = [
      {
        title: "Introducción a " + (prompt || "tu tema"),
        content: [
          "✅ Backend funcionando correctamente",
          "✅ Conexión establecida", 
          "✅ Prueba exitosa"
        ]
      },
      {
        title: "Características Principales",
        content: [
          "Generación automática de contenido",
          "Diseños profesionales",
          "Rápido y eficiente"
        ]
      },
      {
        title: "Próximos Pasos",
        content: [
          "Conectar con OpenAI",
          "Mejorar diseños",
          "Agregar más plantillas"
        ]
      }
    ];
    
    // Simular delay
    setTimeout(() => {
      res.json({
        success: true,
        slides: testSlides,
        message: "¡Backend funcionando! Conectado correctamente."
      });
    }, 1000);
    
  } catch (error) {
    console.error('Error:', error);
    res.json({
      success: true,
      slides: [
        {
          title: "Modo de Prueba",
          content: ["Backend activo", "Conexión establecida"]
        }
      ],
      message: "Modo prueba - Error capturado: " + error.message
    });
  }
});

// Ruta de prueba MEJORADA
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '¡Backend funcionando perfectamente!', 
    status: 'active',
    timestamp: new Date().toLocaleTimeString()
  });
});

// Ruta raíz también
app.get('/', (req, res) => {
  res.json({ 
    message: 'Generador de Presentaciones IA - Backend',
    endpoints: {
      test: '/api/test',
      generate: '/api/generate-slides (POST)'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎯 Backend activo en http://localhost:${PORT}`);
  console.log(`📊 Prueba: http://localhost:${PORT}/api/test`);
});