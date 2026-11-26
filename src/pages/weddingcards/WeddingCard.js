import React, { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  CalendarDays,
  Clock3,
  Heart,
  Music2,
  VolumeX,
  Share2,
  MessageCircle,
  Sparkles,
  Check
} from 'lucide-react';
import './weddingcard.css';
// Change the details here to create another invitation.
const wedding = {
  bride: 'Ananya',
  groom: 'Aarav',
  dateLabel: 'Sunday, 14 February 2027',
  dateISO: '2027-02-14T18:00:00',
  venue: 'The Royal Orchid Palace',
  address: 'Bokaro Steel City, Jharkhand, India',
  mapUrl: 'https://maps.google.com/?q=Bokaro+Steel+City',
  phone: '919534404424', // WhatsApp number with country code, no + or spaces
  message: 'With the blessings of our families, we invite you to celebrate our wedding.'
};

const events = [
  { name: 'Haldi Ceremony', date: 'Saturday, 13 February', time: '10:00 AM onwards', note: 'A morning filled with sunshine, laughter and haldi.' , symbol: '☼' },
  { name: 'Mehendi & Sangeet', date: 'Saturday, 13 February', time: '6:00 PM onwards', note: 'An evening of music, dance and celebration.', symbol: '♫' },
  { name: 'Wedding Ceremony', date: 'Sunday, 14 February', time: '6:00 PM onwards', note: 'Join us as we begin our forever together.', symbol: '♡' }
];

function WeddingCard()  {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const [remaining, setRemaining] = useState({ days: '---', hours: '--', minutes: '--', seconds: '--' });

  useEffect(() => {
    const update = () => {
      const diff = new Date(wedding.dateISO).getTime() - Date.now();
      if (diff <= 0) return;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setRemaining({ days, hours: String(hours).padStart(2,'0'), minutes: String(minutes).padStart(2,'0'), seconds: String(seconds).padStart(2,'0') });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const inviteText = `You're invited to the wedding of ${wedding.groom} & ${wedding.bride}! ${window.location.href}`;
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: `${wedding.groom} & ${wedding.bride} — Wedding Invitation`, text: inviteText, url: window.location.href }); } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };
  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      try { await audioRef.current.play(); setMusicOn(true); } catch { setMusicOn(false); }
    }
  };
  const rsvp = () => window.open(`https://wa.me/${wedding.phone}?text=${encodeURIComponent(`Hello! I would love to RSVP for ${wedding.groom} & ${wedding.bride}'s wedding.`)}`, '_blank');

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">A<span>&</span>A</span><span>THE WEDDING INVITATION</span></a>
        <div className="nav-actions"><button className="music-top" onClick={toggleMusic}>{musicOn ? <VolumeX size={15}/> : <Music2 size={15}/>} {musicOn ? "Mute" : "Music"}</button><button className="share-top" onClick={share}><Share2 size={16}/> Share invite</button></div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-pattern"></div>
        <div className="hero-inner">
          <div className="eyebrow"><Sparkles size={14}/> A CELEBRATION OF LOVE <Sparkles size={14}/></div>
          <p className="invite-line">Together with our families,</p>
          <p className="invite-line">we joyfully invite you to celebrate</p>
          <div className="names">
            <span>{wedding.groom}</span>
            <i>&</i>
            <span>{wedding.bride}</span>
          </div>
          <div className="ornament"><span></span><Heart size={17} fill="currentColor"/><span></span></div>
          <p className="hero-date">{wedding.dateLabel}</p>
          <p className="hero-place">{wedding.venue} · {wedding.address}</p>
          <button className="primary-btn" onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}>Explore invitation <span>↓</span></button>
          <div className="hero-bottom">WITH LOVE, FROM OUR FAMILIES</div>
        </div>
        <div className="corner corner-left">❀</div><div className="corner corner-right">❀</div>
      </section>

      <section className="welcome section-pad" id="details">
        <div className="section-kicker">A NOTE FROM OUR HEARTS</div>
        <h2>Two hearts, <em>one beautiful</em><br/>beginning.</h2>
        <p className="body-copy">{wedding.message} Your presence will make our special day even more memorable. We can't wait to celebrate with you!</p>
        <div className="mini-flower">✿</div>
      </section>

      <section className="countdown-wrap">
        <div className="countdown-card">
          <div className="section-kicker light">THE COUNTDOWN BEGINS</div>
          <h2>Until we say <em>“I do”</em></h2>
          <div className="countdown">
            {Object.entries(remaining).map(([unit, value]) => <div className="time-unit" key={unit}><strong>{value}</strong><span>{unit.toUpperCase()}</span></div>)}
          </div>
          <div className="count-note">We are counting every moment until we celebrate with you.</div>
        </div>
      </section>

      <section className="events section-pad">
        <div className="section-kicker">SAVE THE DATES</div>
        <h2>Wedding <em>celebrations</em></h2>
        <p className="body-copy">Every moment has a story. Join us for all the beautiful beginnings.</p>
        <div className="event-grid">
          {events.map((event, index) => <article className="event-card" key={event.name}>
            <div className="event-number">0{index + 1}</div>
            <div className="event-symbol">{event.symbol}</div>
            <h3>{event.name}</h3>
            <div className="event-meta"><CalendarDays size={15}/>{event.date}</div>
            <div className="event-meta"><Clock3 size={15}/>{event.time}</div>
            <p>{event.note}</p>
          </article>)}
        </div>
      </section>

      <section className="venue-section">
        <div className="venue-art"><div className="venue-arch"><span>✿</span><div className="arch-inner">A<br/><small>&</small><br/>A</div></div></div>
        <div className="venue-info">
          <div className="section-kicker">WHERE THE MAGIC HAPPENS</div>
          <h2>Meet us <em>there.</em></h2>
          <h3>{wedding.venue}</h3>
          <p>{wedding.address}</p>
          <a className="outline-btn" href={wedding.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16}/> Get directions</a>
        </div>
      </section>

      <section className="rsvp-section section-pad">
        <div className="section-kicker">WE HOPE YOU CAN MAKE IT</div>
        <div className="big-heart">♡</div>
        <h2>Your presence is<br/><em>our present.</em></h2>
        <p className="body-copy">Please let us know if you'll be joining us. We look forward to celebrating together!</p>
        <button className="primary-btn" onClick={rsvp}><MessageCircle size={17}/> RSVP on WhatsApp</button>
      </section>

      <footer>
        <div className="footer-mark">A <span>&</span> A</div>
        <p>MADE WITH LOVE · {wedding.dateLabel.toUpperCase()}</p>
        <button className="footer-share" onClick={share}>{copied ? <Check size={16}/> : <Share2 size={16}/>} {copied ? 'Link copied' : 'Share this invitation'}</button>
        <small>We can't wait to celebrate with you ♡</small>
      </footer>

      {!opened && <div className="welcome-overlay">
        <div className="envelope-card">
          <div className="envelope-flower">✿</div>
          <div className="section-kicker">YOU ARE CORDIALLY INVITED</div>
          <h2>{wedding.groom} <em>&</em> {wedding.bride}</h2>
          <p>A day of love, laughter & happily ever after</p>
          <button className="primary-btn" onClick={() => setOpened(true)}>Open invitation <span>♡</span></button>
          <small>{wedding.dateLabel}</small>
        </div>
      </div>}
    </main>
  );
}

export default WeddingCard;