const fs = require("fs");
const p = "foodRecipe/frontend/food-blog-app/src/index.css";

const css = `

/* ============================================================
   ADD / EDIT RECIPE FORM
   ============================================================ */
.recipe-form-page {
  max-width: 760px; margin: 0 auto; padding: 40px 24px 80px;
}
.recipe-form-page__header { margin-bottom: 32px; }
.recipe-form-page__title { font-size: 2rem; font-weight: 900; color: var(--text-primary); margin-bottom: 6px; }
.recipe-form-page__subtitle { color: var(--text-secondary); font-size: 0.95rem; }
.recipe-form {
  background: var(--white); border-radius: var(--radius-xl);
  padding: 36px; border: 1px solid var(--border); box-shadow: var(--shadow-md);
  display: flex; flex-direction: column; gap: 24px;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-field { display: flex; flex-direction: column; gap: 8px; }
.form-field--full { grid-column: 1 / -1; }
.form-label {
  font-size: 0.875rem; font-weight: 700; color: var(--text-primary);
  display: flex; align-items: center; gap: 6px;
}
.form-label span { color: var(--secondary); }
.form-input, .form-textarea, .form-select {
  padding: 13px 16px; border: 1.5px solid var(--border);
  border-radius: var(--radius-md); background: var(--cream-dark);
  font-size: 0.9rem; color: var(--text-primary); transition: var(--transition);
  width: 100%;
}
.form-input:focus, .form-textarea:focus, .form-select:focus {
  border-color: var(--primary); background: var(--white);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}
.form-input::placeholder, .form-textarea::placeholder { color: var(--text-muted); }
.form-textarea { resize: vertical; min-height: 120px; line-height: 1.6; }
.form-hint { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }
.file-upload {
  border: 2px dashed var(--border); border-radius: var(--radius-lg);
  padding: 32px; text-align: center; cursor: pointer; transition: var(--transition);
  background: var(--cream-dark); position: relative;
}
.file-upload:hover { border-color: var(--primary); background: rgba(249,115,22,0.03); }
.file-upload input[type="file"] {
  position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%;
}
.file-upload__icon { font-size: 2.5rem; margin-bottom: 10px; }
.file-upload__text { font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; }
.file-upload__hint { font-size: 0.8rem; color: var(--text-muted); }
.file-upload__preview {
  width: 100%; max-height: 200px; object-fit: cover;
  border-radius: var(--radius-md); margin-top: 12px;
}
.form-submit {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 15px 32px; width: 100%;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border: none; border-radius: var(--radius-md);
  font-size: 1rem; font-weight: 700; cursor: pointer;
  box-shadow: 0 4px 14px rgba(249,115,22,0.4); transition: var(--transition);
  margin-top: 8px;
}
.form-submit:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(249,115,22,0.55); transform: translateY(-1px); }
.form-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
  .recipe-form { padding: 24px 20px; }
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: var(--text-primary); color: rgba(255,255,255,0.7);
  padding: 60px 24px 0;
  margin-top: 40px;
}
[data-theme="dark"] .footer { background: #0c0a09; }
.footer__inner {
  max-width: 1280px; margin: 0 auto;
  display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px;
  padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer__logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.footer__logo span { font-size: 1.2rem; font-weight: 800; color: #fff; }
.footer__tagline { font-size: 0.9rem; line-height: 1.7; margin-bottom: 20px; max-width: 280px; }
.footer__socials { display: flex; gap: 10px; }
.footer__social {
  width: 38px; height: 38px; border-radius: var(--radius-full);
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.6); transition: var(--transition);
}
.footer__social:hover { background: var(--primary); border-color: var(--primary); color: #fff; }
.footer__links { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.footer__col { display: flex; flex-direction: column; gap: 10px; }
.footer__col h4 { font-size: 0.85rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
.footer__col a { font-size: 0.875rem; color: rgba(255,255,255,0.55); transition: var(--transition); text-decoration: none; }
.footer__col a:hover { color: var(--primary); }
.footer__bottom {
  max-width: 1280px; margin: 0 auto;
  padding: 20px 0; font-size: 0.85rem;
  display: flex; align-items: center; gap: 6px;
}
@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr; gap: 40px; }
}
`;

fs.appendFileSync(p, css, "utf8");
console.log("Part 6 written");
