export default function FitnessDashboard() {
  return (
    <div className="min-h-screen bg-white font-sans bg-[url('/img.jpg')]">
      <header className="bg-transparent shadow-lg shadow-black/20 backdrop-blur-[1px] text-white px-10 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Hi, <span className="text-purple-400">Harini</span>
          </h1>
          <p className="text-sm mt-1">It’s time to challenge your limits!</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
      </header>
      <main className="flex flex-row gap-10 px-10 py-10">
        <div className="flex flex-col gap-20">
        <section id="recommendation">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Workout',
              img: './s.jpg',
              link: './work'
            }, {
              title: 'Progress',
              img: './p.jpg',
              link: './progress'
            },{
              title: 'Bharatanatyam mode',
              img: './b.jpg',
              link: './dance'

            }].map((workout, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20  shadow-black/20 backdrop-blur-[2px]"
                onClick={() => window.location.href = workout.link}
                style={{ cursor: 'pointer' }}
              >
                <img src={workout.img} alt={workout.title} className="h-70 w-80 object-cover rounded-3xl p-5" />
                <div className="bg-transparent text-white p-2 text-center space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {workout.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id = "articles">
          <h2 className="text-3xl text-white font-bold mt-1 mb-4">Articles & Tips</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{
              title: 'Exercise for Mental Health',
              img: './a_1.jpg'
            }, {
              title: '15 Quick & Effective Daily Routines',
              img: './a_2.jpg'
            },{
              title: 'Exercise for Physical Health',
              img: './a_3.jpg'
            }, {
              title: 'Effective Daily Routines',
              img: './a_4.jpg'
            }].map((article, i) => (
              <div key={i} className="flex space-x-4 items-center bg-transparent p-4 rounded-xl shadow-lg border-2 border-white/20  shadow-black/20 backdrop-blur-[2px]">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="text-sm font-medium text-white">
                  {article.title}
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
        <aside id = "daily_challenge" className="w-full lg:w-1/2 space-y-6 ">
          <div className="bg-transparent rounded-xl p-6 text-white text-center shadow-lg border-2 border-white/20  shadow-black/20 backdrop-blur-[2px]">
            <h2 className="text-2xl font-bold text-white">Daily Challenge</h2>
            <p classname="mt-10">Exercise right way everyday to keep the doctor away</p>
            
            <img src="./wc.jpg" alt="Challenge" className="mt-4 w-full h-100 object-cover rounded-lg" />
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold mt-5">
              Start Now
            </button>
          </div>
        </aside>
        
      </main>
    </div>
  );
}