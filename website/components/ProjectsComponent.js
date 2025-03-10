import { Link, Table, TableBody, TableCell, TableRow } from "@mui/material";

const ProjectsComponent = ({ data }) => {
  return (
    <>
      <Table>
        <TableBody>
          {data.projects.map((project) => (
            <TableRow>
              <TableCell sx={{paddingY:"1.5rem"}}>
                <Link
                  href={project.link}
                  target="_blank"
                  sx={{
                    textDecoration: project.link ? "underline" : "none",
                    color: "var(--primaryText)",
                    "&:hover": {
                      color: project.link ? "var(--secondaryText)" : "none",
                    },
                  }}
                >
                  {project.title}
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>{project.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProjectsComponent;
