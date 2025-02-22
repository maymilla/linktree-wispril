"use client"

interface LinkButtonProps {
  text: string;
  linkWeb: string;
}

const LinkButton = ({ text, linkWeb }: LinkButtonProps) => {
  function openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <button 
      className="bg-amber-50 border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-amber-50 transition-colors duration-200 font-bold py-4 px-8 sm:px-8 md:px-32 rounded-full"
      onClick={() => openLink(linkWeb)}
    >
      {text}
    </button>
  )
}

export default LinkButton;