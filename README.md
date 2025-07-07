# Inhuman Conditions – Deutsche Online-Version

Dies ist eine **deutsche Webversion** des großartigen Spiels **Inhuman Conditions**, ursprünglich entwickelt von [FTWinston](https://github.com/FTWinston) als [RobotInterrogation](https://github.com/FTWinston/RobotInterrogation/).

Ich habe das Projekt geforkt und vollständig ins Deutsche übersetzt. Zusätzlich habe ich Features wie **einen akustischen Timer**, **Soundeffekte** und kleinere UI-Verbesserungen hinzugefügt.

Das Spiel kann online auf meiner Website gespielt werden:  
👉 **[https://interrogation.magisystem.de](https://interrogation.magisystem.de)**

---

## 🇩🇪 Anleitung zur lokalen Ausführung mit Docker

Stelle sicher, dass Docker auf deinem System installiert ist.

```bash
git clone https://github.com/dein-nutzername/RobotInterrogation
cd RobotInterrogation
sudo docker build . -t robot
sudo docker run --name robot -p 127.0.0.1:8080:8080 robot
```

Dann kannst du das Spiel lokal unter [http://127.0.0.1:8080](http://127.0.0.1:8080) spielen.

> Hinweis: Ersetze `robot` durch einen Namen deiner Wahl für das Docker-Image bzw. den Container.

---

## 🧑‍💻 Danksagung

- **[FTWinston](https://github.com/FTWinston)** – Für die Erstellung des Originalprojekts  
- **[GermanCoding](https://github.com/GermanCoding)** – Für die Unterstützung beim Projektstart

---

## ⚠️ Veraltete Software

Bitte beachte, dass dieses Projekt auf veralteten Technologien basiert:

- Backend: **.NET 5** (nicht mehr offiziell unterstützt)
- Frontend: Ältere **React-Version**

Die Nutzung in einem **Docker-Container** ist daher empfohlen, um Kompatibilitätsprobleme zu vermeiden.

---

# 🇬🇧 Inhuman Conditions – German Online Edition

This is a **German-language online adaptation** of the excellent social deduction game **Inhuman Conditions**, originally created by [FTWinston](https://github.com/FTWinston) in the [RobotInterrogation](https://github.com/FTWinston/RobotInterrogation) repository.

I've forked the project, translated everything into German, and added new features such as a **sound timer** and other small improvements.

You can play the game directly here:  
👉 **[https://interrogation.magisystem.de](https://interrogation.magisystem.de)**

---

## 🐳 How to Run Locally with Docker

Make sure Docker is installed on your system.

```bash
git clone https://github.com/your-username/RobotInterrogation
cd RobotInterrogation
sudo docker build . -t robot
sudo docker run --name robot -p 127.0.0.1:8080:8080 robot
```

Then open your browser at [http://127.0.0.1:8080](http://127.0.0.1:8080) to play.

> Note: Replace `robot` with any custom name you'd like to give your Docker image/container.

---

## 🙏 Special Thanks

- **[FTWinston](https://github.com/FTWinston)** – For the original RobotInterrogation project  
- **[GermanCoding](https://github.com/GermanCoding)** – For helping me get started with the project

---

## ⚠️ Legacy Technology Notice

This project uses outdated technology:

- Backend: **.NET 5** (end-of-life)
- Frontend: Older **React** version

Running it inside a **Docker container** is highly recommended to avoid compatibility issues.

---

🎭 Viel Spaß beim Verhörspiel! / 🤖 Enjoy the interrogation game!
