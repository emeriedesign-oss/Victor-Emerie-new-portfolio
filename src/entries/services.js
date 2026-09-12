/* Entry for the services page. Import order matters: the modules communicate
   through window, so data and shared components must be evaluated before the
   page module that reads them. */
import "../styles/main.css";
import "./bootstrap.js";
import "../js/data.js";
import "../js/cs-overrides.js";
import "../js/routes.js";
import "../js/components/image-slot.js";
import "../js/components/tweaks-panel.jsx";
import "../js/components/site-common.jsx";
import "../js/pages/services.jsx";
