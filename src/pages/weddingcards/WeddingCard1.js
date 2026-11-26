import React, { useEffect, useState } from "react";
import "./weddingcard1.css";

export default function WeddingCard1() {
  const weddingDate = new Date("2027-02-14T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = weddingDate - new Date().getTime();

      if (distance <= 0) {
        setTimeLeft({});
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const events = [
    {
      name: "Haldi Ceremony",
      date: "12 February 2027",
      time: "10:00 AM",
      description: "A beautiful morning filled with turmeric, laughter and blessings.",
      icon: "🌼",
    },
    {
      name: "Mehendi Ceremony",
      date: "12 February 2027",
      time: "04:00 PM",
      description: "An evening of beautiful henna, music and celebrations.",
      icon: "🌿",
    },
    {
      name: "Sangeet Night",
      date: "13 February 2027",
      time: "07:00 PM",
      description: "Music, dance and unforgettable memories with family and friends.",
      icon: "🎶",
    },
    {
      name: "Wedding Ceremony",
      date: "14 February 2027",
      time: "06:00 PM",
      description: "The day two hearts become one. Your blessings mean everything.",
      icon: "💍",
    },
  ];

  return (
    <div className="royal-wedding">

      {/* PAGE 1 - COVER */}

      <section className="royal-page royal-cover">

        <div className="royal-border">

          <div className="royal-top-symbol">❀</div>

          <p className="royal-small-heading">
            THE BEGINNING OF FOREVER
          </p>

          <p className="royal-invitation">
            Together with their families
            <br />
            request the pleasure of your company
          </p>

          <div className="royal-floral">✿</div>

          <h1 className="royal-couple-names">
            Ananya
            <span>&</span>
            Aarav
          </h1>

          <p className="royal-cover-description">
            Two souls, one heart,
            <br />
            one beautiful journey.
          </p>

          <div className="royal-gold-line">
            <span>✦</span>
          </div>

          <div className="royal-wedding-date">
            <span>SUNDAY</span>
            <strong>14</strong>
            <span>FEBRUARY 2027</span>
          </div>

          <p className="royal-cover-footer">
            YOUR PRESENCE WILL MAKE OUR DAY SPECIAL
          </p>

          <div className="royal-bottom-flower">❀</div>

        </div>

        <div className="royal-page-number">01</div>

      </section>


      {/* PAGE 2 - COUPLE INTRODUCTION */}

      <section className="royal-page royal-couple-page">

        <div className="royal-section-heading">
          <span>OUR BEAUTIFUL STORY</span>
          <h2>Two Hearts, One Soul</h2>
          <div>❦</div>
        </div>

        <p className="royal-story-text">
          Some stories are written in the stars.
          Ours is a beautiful journey that brought
          two hearts together, and now we begin
          our forever.
        </p>

        <div className="royal-couple-grid">

          <div className="royal-person">

            <div className="royal-person-image royal-bride-image">
              <span>BRIDE</span>
            </div>

            <h3>Ananya</h3>

            <p>
              The beautiful soul who brings
              happiness, warmth and love
              into every moment.
            </p>

            <span className="royal-person-caption">
              Daughter of
              <br />
              Mr. & Mrs. Sharma
            </span>

          </div>

          <div className="royal-heart">♡</div>

          <div className="royal-person">

            <div className="royal-person-image royal-groom-image">
              <span>GROOM</span>
            </div>

            <h3>Aarav</h3>

            <p>
              The wonderful person who makes
              every ordinary moment
              extraordinary.
            </p>

            <span className="royal-person-caption">
              Son of
              <br />
              Mr. & Mrs. Mahato
            </span>

          </div>

        </div>

        <div className="royal-couple-quote">
          "And so their adventure begins..."
        </div>

        <div className="royal-page-number">02</div>

      </section>


      {/* PAGE 3 - WEDDING EVENTS */}

      <section className="royal-page royal-events-page">

        <div className="royal-section-heading">
          <span>CELEBRATIONS & TRADITIONS</span>
          <h2>Wedding Festivities</h2>
          <div>❦</div>
        </div>

        <p className="royal-events-intro">
          Every moment is a memory waiting to happen.
          Join us in celebrating these beautiful occasions.
        </p>

        <div className="royal-events-list">

          {events.map((event, index) => (
            <div className="royal-event-card" key={event.name}>

              <div className="royal-event-icon">
                {event.icon}
              </div>

              <div className="royal-event-content">

                <span className="royal-event-number">
                  EVENT 0{index + 1}
                </span>

                <h3>{event.name}</h3>

                <div className="royal-event-date">
                  {event.date} · {event.time}
                </div>

                <p>{event.description}</p>

              </div>

            </div>
          ))}

        </div>

        <div className="royal-events-footer">
          GOOD FOOD · GREAT MUSIC · BEAUTIFUL MEMORIES
        </div>

        <div className="royal-page-number">03</div>

      </section>


      {/* PAGE 4 - WEDDING COUNTDOWN */}

      <section className="royal-page royal-countdown-page">

        <div className="royal-countdown-decoration">
          ✧ ❀ ✧
        </div>

        <div className="royal-section-heading">
          <span>THE BIG DAY IS APPROACHING</span>
          <h2>Counting Every Moment</h2>
          <div>♡</div>
        </div>

        <p className="royal-countdown-text">
          Until we begin our forever...
        </p>

        <div className="royal-countdown">

          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div className="royal-time-box" key={unit}>
              <strong>{timeLeft[unit] ?? "00"}</strong>
              <span>{unit.toUpperCase()}</span>
            </div>
          ))}

        </div>

        <div className="royal-main-date">
          <span>THE WEDDING DAY</span>
          <h3>14 · 02 · 2027</h3>
          <p>Sunday | 6:00 PM onwards</p>
        </div>

        <div className="royal-quote-box">

          <span>❝</span>

          <p>
            May our love be modern enough
            to survive the times and old-fashioned
            enough to last forever.
          </p>

          <span>❞</span>

        </div>

        <div className="royal-countdown-decoration">
          ✧ ❀ ✧
        </div>

        <div className="royal-page-number">04</div>

      </section>


      {/* PAGE 5 - VENUE AND RSVP */}

      <section className="royal-page royal-venue-page">

        <div className="royal-section-heading">
          <span>WE WOULD LOVE TO SEE YOU</span>
          <h2>Join Our Celebration</h2>
          <div>❦</div>
        </div>

        <div className="royal-venue-decoration">
          🏰
        </div>

        <p className="royal-venue-label">
          THE WEDDING VENUE
        </p>

        <h2 className="royal-venue-name">
          The Royal Orchid Palace
        </h2>

        <p className="royal-venue-address">
          Bokaro Steel City,
          <br />
          Jharkhand, India
        </p>

        <div className="royal-venue-timing">

          <div>
            <span>DATE</span>
            <strong>14 February 2027</strong>
          </div>

          <div>
            <span>TIME</span>
            <strong>06:00 PM onwards</strong>
          </div>

        </div>

        <a
          href="https://maps.google.com/?q=Bokaro+Steel+City"
          target="_blank"
          rel="noreferrer"
          className="royal-location-button"
        >
          📍 GET DIRECTIONS
        </a>

        <div className="royal-rsvp">

          <h3>Kindly Confirm Your Presence</h3>

          <p>
            Your presence and blessings
            will make our celebration unforgettable.
          </p>

          <a
            href="https://wa.me/919534404424?text=Congratulations!%20I%20will%20be%20attending%20your%20wedding."
            target="_blank"
            rel="noreferrer"
            className="royal-rsvp-button"
          >
            CONFIRM ON WHATSAPP
          </a>

        </div>

        <div className="royal-final-message">

          <div>❀</div>

          <h2>With Love & Blessings</h2>

          <p>
            We look forward to celebrating
            this beautiful beginning with you.
          </p>

          <h3>Ananya & Aarav</h3>

        </div>

        <div className="royal-page-number">05</div>

      </section>

    </div>
  );
}