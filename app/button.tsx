"use client"

export default function LinkButton() {
    function openLink(url: string) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
      return (
        <button className="bg-amber-50 border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-amber-50 transition-colors duration-200 font-bold py-2 px-4 sm:px-8 md:px-16 rounded-full "
        onClick={() => openLink("https://linktr.ee/s/templates/?&utm_source=google&utm_medium=cpc&utm_campaign=ID_Always_On_Google_Search_Brand_Product_Most_Aware_TCPA&utm_term=linktree&utm_content=Exact&gad_source=1&gclid=CjwKCAiA2cu9BhBhEiwAft6IxF-9Gi4CcfDIw29e1g0IpAd9kCpNjFQeO-AVnvDGPkF8g4A-Uv6KjRoCb3MQAvD_BwE&gclsrc=aw.ds")}>Wispril 2024</button>
      )
}