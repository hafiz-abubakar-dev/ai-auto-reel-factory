# 🎬 AI Auto-Reel Factory: End-to-End Video Generation Pipeline

A highly advanced, 100% autonomous video generation pipeline orchestrated in **n8n**. This "Digital Factory" completely replaces manual human video editing by automating the entire lifecycle of short-form promotional content—from scriptwriting and image generation to voiceover synthesis and FFmpeg video concatenation.

---

## 🌟 Executive Summary
Built to deliver cost-effective, high-quality social media reels at scale. Unlike traditional workflows that rely on expensive APIs and manual editors, this pipeline utilizes **Alibaba Qwen LLM** for creative direction, **Wan2.1-i2v-turbo** for cinematic video generation, and **Microsoft Edge-TTS** for natural Urdu (Arabic script) voiceovers. The final assets are automatically merged via local Linux/Bash commands inside a Docker container and uploaded directly to Google Drive.

---

## 🖼️ System Architecture & Execution Proofs

### 1. Core n8n Workflow Architecture
*The complete orchestration canvas showing Google Sheets integration, LLM sub-agents, generation loops, and bash processing:*

![Workflow Architecture](01-workflow-architecture.jpg)

### 2. Successful Pipeline Execution
*Live execution logs proving successful data flow, API authentications, loop iterations, and final video rendering (Green Ticks):*

![Workflow Execution](02-workflow-execution.jpg)

---

## ⚙️ Core Tech Stack & AI Models

### 1. Infrastructure & Orchestration
- **Engine:** n8n (Self-Hosted via Docker on Local Environment)
- **Data Integration:** Google Sheets API, Google Drive API
- **Processing:** Advanced JSON parsing, Array splitting, and dynamic Webhooks.

### 2. AI Generation Models
- **Brain / Scriptwriter:** Alibaba Cloud Qwen LLM (Generates precise Arabic-script Urdu and flattened YAML prompts).
- **Image Generation:** Qwen Cloud Chat (Structured Output Parser).
- **Video Generation:** `wan2.1-i2v-turbo` (Generates 720P, 5-second cinematic clips per scene).
- **Voice Synthesis (TTS):** Microsoft Edge-TTS (`ur-PK-UzmaNeural` configured with `--rate=+15%` for natural pacing).

### 3. Backend Post-Processing
- **Video Merging:** FFmpeg (`concat` demuxer, scaling, and audio muxing).
- **Environment:** BusyBox / Linux Shell (Handling n8n `filesystem-v2` binary data extraction to the local Docker `/tmp` storage).

---

## 🚀 The Automated Factory Flow

1. **Data Ingestion:** Fetches business context and previous scripts from Google Sheets.
2. **LLM Creative Direction:** Qwen generates a highly structured 4-beat sitcom script and strictly formats visual prompts.
3. **Media Generation (The Loop):** 
   - Converts text prompts into images.
   - Feeds images into Wan2.1 to generate 4 separate MP4 video clips.
4. **Voiceover Synthesis:** Edge-TTS processes Arabic-script Urdu into high-fidelity `.mp3` audio files.
5. **FFmpeg Assembly:** 
   - Extracts binary data from n8n's internal storage directly into the Linux `/tmp` directory.
   - Merges the 4 video clips and syncs the synthesized audio into one final, polished MP4 reel.
6. **Delivery:** The final output is automatically uploaded to a designated Google Drive folder.

---

## 👨‍💻 Engineering Highlights & Problem Solving

- **Dockerized Local Environment:** The entire pipeline runs on a self-hosted, local Docker instance of n8n, ensuring complete data privacy, full control over local bash execution, and removing monthly SaaS subscription costs.
- **Cost-Optimization Architecture:** Engineered to generate 30+ monthly videos at a fraction of the cost of standard manual workflows by utilizing free Edge-TTS and cost-effective Wan Turbo models.
- **Overcoming n8n Binary Storage Limits:** Solved file access issues by writing custom Bash scripts (`cp \$(find /home/node/.n8n/ -name "*.mp4" | tail -n 1) /tmp/clip.mp4`) to bypass n8n's strict `filesystem-v2` structure, enabling seamless FFmpeg processing inside the container.
- **Perfect Audio-Visual Sync:** Integrated `--rate=+15%` parameters in TTS generation and strict output parsing to ensure the 5-second Wan video clips perfectly align with the spoken Urdu audio length.

---
*Architected and Developed by **Abu Bakar Siddique** (@hafiz-abubakar-dev) — AI Automation Engineer*
