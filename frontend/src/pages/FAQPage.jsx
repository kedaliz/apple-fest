import React, { useState } from 'react';
import './FAQPage.css';

export default function FAQPage() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What are the festival hours?",
            answer: "Friday, September 27: 12pm - 6pm | Saturday, September 28: 10am - 6pm | Sunday, September 29: 10am - 6pm"
        },
        {
            id: 2,
            question: "Is there an admission fee?",
            answer: "No, the Apple Harvest Festival is free to attend! All activities and vendor browsing is complimentary."
        },
        {
            id: 3,
            question: "Where can I park?",
            answer: "Free parking is available throughout downtown Ithaca. Several parking lots are within walking distance of the Ithaca Commons."
        },
        {
            id: 4,
            question: "Can I bring my family and kids?",
            answer: "Absolutely! The festival is a family-friendly event with activities and entertainment for all ages."
        },
        {
            id: 5,
            question: "Are there food vendors?",
            answer: "Yes! We have food trucks, farm stands, bakeries, and many local food vendors offering delicious apple-themed treats and seasonal foods."
        },
        {
            id: 6,
            question: "Will there be live music?",
            answer: "Yes, live entertainment and music performances happen throughout the weekend. Check the event schedule for times."
        }
    ];

    const contacts = [
        { label: "Email", info: "info@downtownithaca.com", link: "mailto:info@downtownithaca.com" },
        { label: "Phone", info: "(607) 277-8679", link: "tel:(607) 277-8679" },
        { label: "Website", info: "www.downtownithaca.com", link: "https://www.downtownithaca.com" },
        { label: "Address", info: "Downtown Ithaca Alliance, Ithaca Commons, Ithaca, NY", link: "#" }
    ];

    return (
        <main className="faq-page">
            <h1>FAQ & Contacts</h1>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map(faq => (
                        <div key={faq.id} className="faq-item">
                            <button
                                className={`faq-question ${openFAQ === faq.id ? 'open' : ''}`}
                                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openFAQ === faq.id ? '−' : '+'}</span>
                            </button>
                            {openFAQ === faq.id && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="contacts-section">
                <h2>Contact Us</h2>
                <div className="contacts-grid">
                    {contacts.map((contact, idx) => (
                        <a
                            key={idx}
                            className="contact-card"
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('http') ? "noopener noreferrer" : ""}
                        >
                            <h3>{contact.label}</h3>
                            <p>{contact.info}</p>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
