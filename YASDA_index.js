// Open WhatsApp quick
function openWhatsApp() {
  window.open("https://wa.me/2348089450682", "_blank");
}

// Contact form handler: opens user's email client using mailto: and shows feedback
function handleContact(e) {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById("name").value.trim());
  const email = encodeURIComponent(
    document.getElementById("email").value.trim()
  );
  const phone = encodeURIComponent(
    document.getElementById("phone").value.trim()
  );
  const message = encodeURIComponent(
    document.getElementById("message").value.trim()
  );

  const subject = encodeURIComponent(
    "YASDA Help Request from " + (name || "Anonymous")
  );
  const body = encodeURIComponent(
    "Name: " +
      (name || "") +
      "\\nEmail: " +
      (email || "") +
      "\\nPhone: " +
      (phone || "") +
      "\\n\\nMessage:\\n" +
      (message || "")
  );

  // Use mailto: to let user's mail client compose message to association email
  const mailto =
    "mailto:abbarabiu202@gmail.com?subject=" + subject + "&body=" + body;
  window.location.href = mailto;

  // show feedback (note: actual sending depends on user's mail client)
  const f = document.getElementById("feedback");
  f.style.display = "block";
  setTimeout(() => {
    f.style.display = "none";
  }, 5000);
}

// Join form handler: uses mailto: OR opens WhatsApp if provided
function handleJoin(e) {
  e.preventDefault();
  const name = encodeURIComponent(
    document.getElementById("jname").value.trim()
  );
  const phone = encodeURIComponent(
    document.getElementById("jphone").value.trim()
  );
  const email = encodeURIComponent(
    document.getElementById("jemail").value.trim()
  );
  const msg = encodeURIComponent(document.getElementById("jmsg").value.trim());

  const subject = encodeURIComponent(
    "YASDA Membership Request from " + (name || "Anonymous")
  );
  const body = encodeURIComponent(
    "Name: " +
      (name || "") +
      "\\nPhone: " +
      (phone || "") +
      "\\nEmail: " +
      (email || "") +
      "\\n\\nMessage:\\n" +
      (msg || "")
  );
  const mailto =
    "mailto:abbarabiu202@gmail.com?subject=" + subject + "&body=" + body;

  // if phone looks like a WhatsApp number, offer to open WhatsApp; otherwise open mailto
  const sanitized = phone.replace(/[^0-9]/g, "");
  if (sanitized.length >= 10) {
    // open mailto and also WhatsApp in new tab for faster contact
    window.open(
      "https://wa.me/" +
        (sanitized.startsWith("0")
          ? "234" + sanitized.substring(1)
          : sanitized),
      "_blank"
    );
  }
  window.location.href = mailto;

  const f = document.getElementById("joinFeedback");
  f.style.display = "block";
  setTimeout(() => {
    f.style.display = "none";
  }, 5000);
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});
