const API_BASE = "http://localhost:3000/api";

// =======================
// LOGIN FUNCTION
// =======================
async function login() {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Login failed");
    }

    // store token
    localStorage.setItem("token", data.token);

    alert("Login successful!");
    loadStudents();
  } catch (err) {
    alert(err.message);
  }
}

// =======================
// LOAD STUDENTS
// =======================
async function loadStudents() {
  const token = localStorage.getItem("token");

  if (!token) {
    login(); // force login
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      localStorage.removeItem("token");
      return login();
    }

    const students = await res.json();

    displayStudents(students);
  } catch (err) {
    document.body.innerHTML += `<p style="color:red;">Error loading students</p>`;
  }
}

// =======================
// DISPLAY STUDENTS
// =======================
function displayStudents(students) {
  const container = document.createElement("div");

  students.forEach((student) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>Email:</strong> ${student.email}</p>
      ${
        student.image
          ? `<img src="${student.image}" width="100"/>`
          : ""
      }
      <hr/>
    `;

    container.appendChild(div);
  });

  document.body.appendChild(container);
}

// =======================
// INIT
// =======================
loadStudents();
