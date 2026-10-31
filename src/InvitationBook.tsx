import {useLanguage} from './language';
import {Lotus, Panel} from './Panels';
import {wedding} from './wedding';

type Turn = {from: number; to: number};
const titles = ['An invitation', 'Our beautiful beginning', 'Two families, one celebration', 'An evening to remember', 'A sacred beginning', 'Together, in Kanipakam', 'With love, always'];

function Verso({page}:{page:number}) {
 const {t}=useLanguage();
  return <div className={`verso verso-${page}`}>
    <div className="paper-border"/>
    {page===1||page===6 ? <>
      <div className="book-photo"><img src={wedding.photo} alt="V Pavithra and M. Gnanasekhar together"/></div>
      <p className="verso-caption">{t('PAVITHRA & GNANASEKHAR')}</p>
    </> : <div className="verso-ornament"><Lotus/><p className="eyebrow">{t('PAVITHRA & GNANASEKHAR')}</p><h2><i>{t(titles[page])}</i></h2><div className="verso-monogram">P <em>&</em> G</div><p className="eyebrow">16 · 11 · 2026</p></div>}
    <span className="folio">{String(Math.max(1,page*2-1)).padStart(2,'0')}</span>
  </div>;
}

/** One physical leaf, hinged at the center. Its back becomes the next verso.
 * Back navigation reverses the same geometry, from -180deg to 0deg. */
export function InvitationBook({page,turn,ready,motion,share,onTurnEnd,onOpen}:{page:number;turn:Turn|null;ready:boolean;motion:boolean;share:()=>void;onTurnEnd:()=>void;onOpen:()=>void}) {
  const {t}=useLanguage();
  const forward=!!turn&&turn.to>turn.from;
  const closed=page===0&&!turn;
  const left=turn?(forward?turn.from:turn.to):page;
  const right=turn?(forward?turn.to:turn.from):page;
  return <div className={`book-stage ${closed?'is-closed':'is-open'} ${turn?'is-turning':''} ${turn?.from===0?'is-opening':''} ${turn?.to===0?'is-closing':''} ${motion?'full-motion':'gentle-motion'}`} aria-busy={!!turn||!ready}>
    <div className="bound-book">
      <div className="book-binding" aria-hidden="true"/>
      <div className="book-left" aria-hidden={closed||!!turn} inert={closed||!!turn}><Verso page={left}/></div>
      <div className="book-right" aria-hidden={!!turn} inert={!!turn}><Panel page={right} share={share}/>{closed&&<button className="cover-open-target" onClick={onOpen} disabled={!ready} aria-label="Tap the invitation cover to open"><span>{t('Tap to open')}<span aria-hidden="true">↗</span></span></button>}<span className="folio">{String(right*2).padStart(2,'0')}</span></div>
      <div className="book-gutter" aria-hidden="true"/>
      {turn&&motion&&<>
        <div className={`cast-shadow ${forward?'shadow-forward':'shadow-backward'}`} aria-hidden="true"/>
        <div className={`book-leaf ${forward?'flip-forward':'flip-backward'} ${turn.from===0||turn.to===0?'hard-cover':''}`} aria-hidden="true" inert onAnimationEnd={e=>{if(e.target===e.currentTarget)onTurnEnd()}}>
          <div className="book-face face-front"><Panel page={forward?turn.from:turn.to} share={share}/><div className="leaf-light"/></div>
          <div className="book-face face-back"><Verso page={forward?turn.to:turn.from}/><div className="leaf-light"/></div>
        </div>
      </>}
    </div>
  </div>;
}
