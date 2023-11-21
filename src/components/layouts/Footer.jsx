import { Igithub, Ilogo, Iinstagram, Iyoutube } from "../../components/svgs/logo";

export default function Footer() {
  const socialIconBox = "icon-box text p-2 w-12 h-12 text-a hover:clr-p set-bg-light rounded hover:text-light hover:bg-dark";

  return (
    <footer className="section-padding pb-8">

      <div className="gap-2 grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]">
        <div className="flex-center p-2 w-full h-full">
          <a href="#" className="icon-box w-20 h-20 clr-p"><Ilogo /></a>
        </div>
        <div className="flex-center gap-4 p-2 w-full h-full">
          <a href="https://www.instagram.com/webdevsalmann/" target="_blank" rel="noreferrer" className={socialIconBox}><Iinstagram /></a>
          <a href="https://youtube.com/@webdevsalmann" target="_blank" rel="noreferrer" className={socialIconBox}><Iyoutube /></a>
          <a href="https://github.com/webdevsalmann" target="_blank" rel="noreferrer" className={socialIconBox}><Igithub /></a>
        </div>
      </div>

      <div className="mt-4 flex-center p-2 w-full h-full">
        <p className="text-xs">Created by &nbsp;
          <a href="https://webdevsalman.netlify.app/" className="text-balance hover:underline text-xs">Salman Mallick</a>&nbsp;/&nbsp; <a href="#" className="text-balance hover:underline text-xs">privacy-policy</a>&nbsp;/&nbsp;
          <a href="#" className="text-balance hover:underline text-xs">copyright&copy;</a></p>
      </div>

    </footer>
  )
}
