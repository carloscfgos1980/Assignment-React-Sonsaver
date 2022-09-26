1. First step 7-7-2022. Creating React App and the clean the app.
   N: Remind of how to clan the app in "react-todo-app-v1-master"

2. For the DataBase
   In the terminal, tupe:
   npx json-server --watch data/db.json --port 8000

3. Use Icons

## tutorial for icons:

https://www.youtube.com/watch?v=aor9hlcODUE&t=226s

3.1 - Search in google:
https://react-icons.github.io/react-icons/

3.2 - Install the extention for icons In the terminal:
npm install react-icons --save

3.3 - import Icons to the file we are going to use(SongList.js). Ex:
import { FaTrash } from "react-icons/fa";

Type the name of the icon in the place where we would type the name of the button, like this:
button className="button-list" onClick={() => handleDelete(song.id)} ><FaTrash /></button

3.4 -Style the button in app.css
