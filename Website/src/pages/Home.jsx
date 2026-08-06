export function Home() {
  return (
    <main>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlVbQ6td4rc6GUU-YudnX375Lg6h--lIU0ww428p2vA&s"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP3GaKJHtktPgjTL-6kvfJVcdcM-u_gif90CV-7VkeA&s=10"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXXjyi0E7DZL8kYOinLuF0cu1d0nad2BzBPedujY1Ow&s=10"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1miVEZEcHwD5moOI6BTn5fSHWf2IIHmuCyeCFeK1QoA&s=10"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlVbQ6td4rc6GUU-YudnX375Lg6h--lIU0ww428p2vA&s"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwb6ittxNe6SfanvBrQ7hbMbFULwYcfs-dMjU68MaxFg&s"
              />
            </div>
          </div>
        </div>

        {/* Featured Jewelry Paragraph Card */}
        <div className="block rounded-lg bg-white p-6 shadow-md border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 max-w-xl mx-auto my-8">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Discover Unique Elegance Every Month
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Our jewelry collection offers a curated experience where timeless
            craft meets fresh style. By highlighting monthly featured products,
            we bring you handpicked, limited-run pieces and seasonal designs
            crafted to elevate your personal style and keep your look
            effortlessly up to date.
          </p>
        </div>
      </div>
    </main>
  );
}
