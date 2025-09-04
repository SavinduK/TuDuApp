# 📝 Google Sheets To-Do App

A simple To-Do List app powered by **Google Sheets** + **Google Apps Script**.  
Add, view, and delete tasks directly from a web interface, with all data stored in your Google Sheet.

---

## 🚀 Setup Guide

### 1. Create Google Sheet
- Make a new Google Sheet.  
- Add **1 column** with the header:  


---

### 2. Open Apps Script
- In the Sheet, go to **Extensions → Apps Script**.  
- Create two files:
  - `Code.gs` → backend logic
  - `index.html` (or `script.html`) → frontend UI  

---

### 3. Add Code
- Copy your **Google Apps Script backend** into `Code.gs`.  
- Copy your **HTML + JS frontend** into `index.html`.  
- Save all changes ✅  

---

### 4. Deploy Web App
1. Go to **Deployments → New Deployment**.  
2. Select **Web app**.  
3. Configure:
   - **Execute as:** `Me`  
   - **Who has access:** `Anyone` (or *Anyone with the link* for restricted sharing)  
4. Deploy 🚀  
5. Copy the generated **Deployment URL** — this is your live app link.  

---

## 🔗 Usage
- Open the deployment URL in your browser.  
- Add tasks in the input field → they are stored in Google Sheet.  
- Delete tasks with the 🗑️ icon.  

---

## 📌 Notes
- All data is synced with your Google Sheet in real time.  
- To update the app, edit the script and **Update deployment**.

  ---

  ## 🔗 Link
  -URL = https://script.google.com/macros/s/AKfycbwqaFPhb40yxhk8uw1i8RQ61bUjzoZ92iyjg5EHwen0BANeTaLbH_YMaQtq7sUVhCOr8w/exec 
- Access permissions control who can use the app.  

---
Made with ❤️ using **Google Sheets + Apps Script**

