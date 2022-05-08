import RepositoryColumn from "./PopularRepositories/RepositoryColumn";

const repositories = [
  {
    title: "udemy_table_of_contents",
    scope: "Public",
    fork: "Forked from thisHermit/udemy_table_of_contents",
    lang: "Python",
  },
  {
    title: "thisHermit.github.io",
    scope: "Public",
    fork: "Forked from thisHermit/udemy_table_of_contents",
    desc: "A website having my portfolio and blogs.",
    lang: "HTML",
  },
  {
    title: "lownightsnack.github.io",
    scope: "Public",
    fork: false,
    desc: "Hello, *coder*!",
    lang: "SCSS",
  },
  {
    title: "coding-interview-university",
    scope: "Public",
    fork: "Forked from jwasham/coding-interview-university",
    desc: "A complete computer science study plan to become a software engineer.",
    lang: "",
  },
  {
    title: "rst2pdf",
    scope: "Public",
    fork: "Forked from rst2pdf/rst2pdf",
    desc: "Use a text editor. Make a PDF.",
    lang: "Python",
  },
  {
    title: "swot",
    scope: "Public",
    fork: "Forked from JetBrains/swot",
    desc: "Identify email addresses or domains names that belong to colleges or universities. Help automate the process of approving or rejecting academic discounts.",
    lang: "Kotlin",
  },
];

const PopularRepositories = () => {
  const chunks = [];
  for (let i = 0; i < repositories.length; i += 2)
    chunks.push(repositories.slice(i, i + 2));

  return (
    <>
      <div className="is-flex is-justify-content-space-between">
        <p>Popular repositories</p>
        <p>Customize your pins</p>
      </div>
      <div
        className="is-flex is-flex-direction-column py-3"
        style={{ gap: "1.5rem" }}
      >
        {chunks.map((repos, index) => (
          <RepositoryColumn repositories={repos} key={index} />
        ))}
      </div>
    </>
  );
};

export default PopularRepositories;
