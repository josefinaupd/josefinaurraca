#!/usr/bin/env python3
"""Genera dist/ficha.html: la misma página en un solo archivo.

El index.html enlaza CSS y JS por separado, como debe ser en el sitio real.
Para publicar una vista previa (Artifact, correo, adjunto) hace falta un
único archivo autónomo: este script mete el CSS y el JS dentro y quita el
envoltorio <html>/<head>/<body>.

    python3 tools/artefacto.py
"""
import pathlib
import re

raiz = pathlib.Path(__file__).resolve().parent.parent
html = (raiz / "index.html").read_text(encoding="utf-8")
css = (raiz / "assets/css/main.css").read_text(encoding="utf-8")
js = (raiz / "assets/js/main.js").read_text(encoding="utf-8")

titulo = re.search(r"<title>.*?</title>", html, re.S).group(0)
fuentes = re.search(r'<link href="https://fonts\.googleapis\.com[^>]*>', html).group(0)
cuerpo = re.search(r"<body>(.*)</body>", html, re.S).group(1)

cuerpo = cuerpo.replace('<script src="assets/js/main.js" defer></script>', "")

salida = raiz / "dist"
salida.mkdir(exist_ok=True)
(salida / "ficha.html").write_text(
    f"{titulo}\n{fuentes}\n<style>\n{css}</style>\n{cuerpo.strip()}\n"
    f"<script>\n{js}</script>\n",
    encoding="utf-8",
)
print("dist/ficha.html escrito")
