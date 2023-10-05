import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();
  const sections = [
    {
      id: 1,
      title: "Welcome to Ghost",
      author: "Michu",
      date: "03 October 2023",
      description:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.…",
    },
    {
      id: 2,
      title: "Writing posts with Ghost",
      author: "Michu",
      date: "03 October 2023",
      description:
        "Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.…",
    },
    // Add more section data as needed
  ];

  function showPost(id: number) {
    navigate("/post/" + id);
  }

  return (
    <>
      <div className="container mx-auto mt-40 max-w-3xl">
        <div className="text-center">
          <h1 className="font-sans text-5xl font-bold text-white">Atilla</h1>
          <p className="font-serif text-3xl text-slate-500 my-5">
            Thoughts, stories and ideas.
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            <hr className="w-80 mx-auto my-20" />
            <h1
              className="font-sans text-5xl font-bold text-white cursor-pointer"
              onClick={() => showPost(section.id)}
            >
              {section.title}
            </h1>
            <p className="font-sans my-2 text-gray-400">
              By {section.author} on {section.date}
            </p>
            <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}

        <hr className="w-80 mx-auto my-20" />
        <p className="font-sans mt-4 mb-8 text-gray-400 text-center">
          Page 1 of 1
        </p>
      </div>
    </>
  );
}

// <>
// <div className="container mx-auto mt-40 max-w-3xl">
//   <div className="text-center">
//     <h1 className="font-sans text-5xl font-bold text-white">Atilla</h1>
//     <p className="font-serif text-3xl text-slate-500 my-5">
//       Thoughts, stories and ideas.
//     </p>
//   </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Welcome to Ghost
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         Welcome, it's great to have you here. We know that first impressions
//         are important, so we've populated your new site with some initial
//         getting started posts that will help you get familiar with
//         everything in no time.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Writing posts with Ghost
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         Discover familiar formatting options in a functional toolbar and the
//         ability to add dynamic content seamlessly.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Publishing options
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         The Ghost editor post settings menu has everything you need to fully
//         optimise and distribute your content effectively.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Managing admin settings
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         There are a couple of things to do next while you're getting set up:
//         making your site private and inviting your team.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Organising your content
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         Ghost has a flexible organisational taxonomy called tags and the
//         ability to create custom site structures using dynamic routes.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Apps & integrations
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         Work with all your favourite apps and tools or create your own
//         custom integrations using the Ghost API.…
//       </p>
//     </div>

//     <div>
//       <hr className="w-80 mx-auto my-20" />
//       <h1
//         className="font-sans text-5xl font-bold text-white cursor-pointer"
//         onClick={showPost}
//       >
//         Creating a custom theme
//       </h1>
//       <p className="font-sans my-2 text-gray-400">
//         By Michu on 03 October 2023
//       </p>
//       <p className="font-serif text-zinc-200 text-xl my-6 leading-relaxed">
//         Ghost comes with a beautiful default theme designed for publishers
//         which can easily be adapted for most purposes, or you can build a
//         custom theme to suit your needs.…
//       </p>
//     </div>
//     <hr className="w-80 mx-auto my-20" />
//     <p className="font-sans mt-4 mb-8 text-gray-400 text-center">
//       Page 1 of 1
//     </p>
//   </div>
// </>
