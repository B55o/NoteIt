
# NoteIt - A Simple Note-Taking App

## Overview
**NoteIt** is a lightweight web application for creating, editing, and managing notes. The app is built with modern HTML, CSS, and TypeScript.

## Features
- 📝 **Create Notes**: Add new notes.
- ✏️ **Edit Notes**: Modify the content of existing notes.
- 🗑️ **Delete Notes**: Remove unwanted notes.
- 📜 **View All Notes**: Browse through a list of all created notes.
- 🔍 **Search Notes**: Filter notes using a search bar.

## Tech Stack
This project is developed using plain HTML, CSS, and JavaScript without any external frameworks. The focus is on clean code, modularity, and performance.

- **TypeScript**
- **CSS3**
- **HTML5**

## Project Structure

    
    ├──dist
    │   ├── main.css
    │   ├── ...           
    ├── src                   
    │   ├── assets                      # images and icons
    │   ├── code                        # methods used in components
    │   │   ├── appState                # state variable (should be changed to obj)
    │   │   ├── functions               # helper functions
    │   │   │   ├── editNoteHandlers    # crud functionalities
    │   │   │   ├── noteUtils           # functional methods used in components
    │   │   ├── helpers                 # helper functions
    │   ├── models                      # interfaces
    │   ├── pageContent                 # elements getters (used globally)
    │   └── index.ts                    # main ts file
    ├──index.html
    │   
    └── tsconfig.json

## State Management
The app uses a custom `NoteStore` for state management. At the moment it is object containning variables and methods. At final version it should be changed to class so it could encapsulate all note-related operations to ensure immutability.

