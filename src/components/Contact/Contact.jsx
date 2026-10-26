import AccountCircle from "@mui/icons-material/AccountCircle";
import { CssBaseline, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import contactTheme from "./contactTheme";

export default function Contact() {
  return (
    <ThemeProvider theme={contactTheme}>
    <CssBaseline />
    <div className="contact h-full bg-white border border-[rgba(0,0,0,0.0)] rounded-2xl mx-4">
      <div class="overflow-x-auto px-4 py-6  text-[#444746]">
        <h1 className="text-xl pl-[10px]">Contacts <small>(3)</small></h1>
        <table className="min-w-full table-fixed border-collapse border border-[rgba(0,0,0,0.0)] text-sm">
          <thead>
            <tr className="text-left border-b border-[#d7d7d7]">
              <th className="pl-[10px] py-4 font-medium w-1/4">Name</th>
              <th className="hidden md:table-cell px-0 py-4 font-medium w-1/4">Email</th>
              <th className="hidden md:table-cell px-0 py-4 font-medium w-1/4">Phone number</th>
              <th className="hidden md:table-cell px-0 py-4 font-medium w-1/4">Job title and company</th>
            </tr>
          </thead>
          <tbody>
            <span className="text-xs block py-4 pl-[10px] font-medium">Contacts</span>
            <tr className="cursor-pointer hover:bg-[#ecf2fc]">
              <td className="px-0 py-3 pl-[10px]">
                <AccountCircle sx={{ fontSize: 38, color: '#5f6368' }} /> John Doe
              </td>
              <td className="hidden md:table-cell px-0 py-3">johndoe@example.com</td>
              <td className="hidden md:table-cell px-0 py-3">(555) 123-4567</td>
              <td className="hidden md:table-cell px-0 py-3"><span>Software Engineer</span>, <span>Tech Solutions Inc.</span></td>
            </tr>
            <tr className="cursor-pointer hover:bg-[#ecf2fc]">
              <td className="px-0 py-3 pl-[10px]">
                <AccountCircle sx={{ fontSize: 38, color: '#5f6368' }} /> Jane Smith
              </td>
              <td className="hidden md:table-cell px-0 py-3">janesmith@example.com</td>
              <td className="hidden md:table-cell px-0 py-3">(555) 987-6543</td>
              <td className="hidden md:table-cell px-0 py-3"><span>Product Manager</span>, <span>Creative Designs LLC</span></td>
            </tr>
            <tr className="cursor-pointer hover:bg-[#ecf2fc]">
              <td className="px-0 py-3 pl-[10px]">
                <AccountCircle sx={{ fontSize: 38, color: '#5f6368' }} /> Michael Johnson
              </td>
              <td className="hidden md:table-cell px-0 py-3">michaelj@example.com</td>
              <td className="hidden md:table-cell px-0 py-3">(555) 555-5555</td>
              <td className="hidden md:table-cell px-0 py-3"><span>UX Designer</span>, <span>Innovative Agency</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </ThemeProvider>
  );
}