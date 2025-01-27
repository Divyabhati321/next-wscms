'use client'
import React, { useEffect, useState } from 'react'

const InteractiveStrip = ({ interactiveStrip }) => {

    const [currentFs, setCurrentFs] = useState(null);
    const [nextFs, setNextFs] = useState(null);
    const [previousFs, setPreviousFs] = useState(null);

    useEffect(() => {
        let current_fs, next_fs, previous_fs; // fieldsets
    
        const nextButtons = document.querySelectorAll(".next");
        const previousButtons = document.querySelectorAll(".previous");
        const progressBarItems = document.querySelectorAll("#progressbar li");
        const fieldsets = document.querySelectorAll("fieldset");
    
        nextButtons.forEach(button => {
          button.addEventListener('click', function () {
            current_fs = this.parentElement;
            next_fs = current_fs.nextElementSibling;
    
            if (!next_fs) return; // Stop if there's no next fieldset
    
            // Add Class Active
            const nextIndex = Array.from(fieldsets).indexOf(next_fs);
            if (progressBarItems[nextIndex]) {
              progressBarItems[nextIndex].classList.add("active");
            }
    
            // Show the next fieldset
            next_fs.style.display = 'block';
    
            // Hide the current fieldset with style
            animateFieldset(current_fs, next_fs);
          });
        });
    
        previousButtons.forEach(button => {
          button.addEventListener('click', function () {
            current_fs = this.parentElement;
            previous_fs = current_fs.previousElementSibling;
    
            if (!previous_fs) return; // Stop if there's no previous fieldset
    
            // Remove Class Active
            const currentIndex = Array.from(fieldsets).indexOf(current_fs);
            if (progressBarItems[currentIndex]) {
              progressBarItems[currentIndex].classList.remove("active");
            }
    
            // Show the previous fieldset
            previous_fs.style.display = 'block';
    
            // Hide the current fieldset with style
            animateFieldset(current_fs, previous_fs);
          });
        });
    
        const animateFieldset = (current, next) => {
          let opacity = 1;
          const duration = 500;
          const interval = 10;
          const step = interval / duration;
    
          const fadeOut = setInterval(() => {
            opacity -= step;
            current.style.opacity = opacity;
    
            if (opacity <= 0) {
              clearInterval(fadeOut);
              current.style.display = 'none';
              current.style.position = 'relative';
    
              next.style.opacity = 1 - opacity;
            }
          }, interval);
        };

        const sendRegisterButton = document.getElementById('sendRegister');
        if (sendRegisterButton) {
          sendRegisterButton.addEventListener('click', function () {
            const examType = document.querySelector('#examType input[type="radio"]:checked')?.value;
            const desiredExam = sendRegisterButton.dataset.id;
            
            if (examType) {
              const link = `${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/test-preparation-register?e=${desiredExam}&t=${examType}`;
              window.location.href = link;
            } else {
            }
          });
        }
      }, []);

    useEffect(() => {
        const leadForm = document.querySelector(".lead_form");

        if (leadForm) {
            leadForm.addEventListener("submit", handleSubmit);
        }

        return () => {
            if (leadForm) {
                leadForm.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("url", location.pathname);
        formData.append("source", "Rate-My-Chance");

        document.querySelectorAll(".loader, .spin-loader").forEach((el) => (el.style.display = "block"));
        document.querySelector(".submit-button").disabled = true;

        fetch("/stepper", {
            method: "POST",
            body: formData,
            cache: "no-cache",
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.status) {
                    document
                        .querySelectorAll(".lead_form :input")
                        .forEach((input) => {
                            if (
                                !["button", "submit", "reset", "hidden"].includes(input.type) &&
                                input.id !== "date"
                            ) {
                                input.value = "";
                            }
                        });

                    document.getElementById("ratemychance").style.display = "none";
                    document
                        .querySelectorAll(".form-fieldset")
                        .forEach((fieldset) => (fieldset.style.display = "none"));

                    const firstShowLead = document.querySelector(".showLead:first-of-type");
                    if (firstShowLead) {
                        firstShowLead.style.display = "block";
                        firstShowLead.style.opacity = "1";
                    }

                    document.getElementById("thankpopup").style.display = "block";
                    document.querySelector(".submit-button").disabled = false;
                    document.querySelectorAll(".loader, .spin-loader").forEach((el) => (el.style.display = "none"));
                }
            });
    };

    return (
        <div dangerouslySetInnerHTML={{ __html: interactiveStrip }} />
    )
}

export default InteractiveStrip