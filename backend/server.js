const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// =====================
// CONNEXION MONGO
// =====================
mongoose.connect("mongodb://127.0.0.1:27017/palettecraft")
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log("Erreur MongoDB :", err));

// =====================
// USER MODEL
// =====================
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", UserSchema);

// =====================
// REGISTER
// =====================
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Utilisateur existe déjà" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    res.json({ message: "Utilisateur créé" });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// =====================
// LOGIN
// =====================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur introuvable" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      { userId: user._id },
      "SECRET_KEY_PALETTECRAFT",
      { expiresIn: "7d" }
    );

    res.json({ token, email: user.email });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// =====================
// START SERVER
// =====================
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});