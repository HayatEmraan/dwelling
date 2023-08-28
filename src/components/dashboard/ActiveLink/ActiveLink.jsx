import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((data, index) => {
        const isActive = pathname === data.path;

        return (
          <li
            className={`list-none mt-4 ${
              isActive ? "bg-[#003B95] text-white p-2 rounded-md" : ""
            }`}
            key={index}
          >
            <Link href={data.path} className="flex items-center space-x-1">
              <span className="text-sm md:text-md">{data.icon}</span>{" "}
              <span className="text-sm md:text-md">{data.title}</span>
            </Link>
          </li>

          // <AccordionItem
          //   toggle={() => toggle(index)}
          //   isOpen={isOpen === index}
          //   key={index}
          //   title={data.title}
          //   desc={data.children}
          //   icon={data.icon}
          // />
        );
      })}
    </>
  );
};

export default ActiveLink;
