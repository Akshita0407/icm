interface ArticleTable {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

interface ArticleSection {
  heading?: string;
  paragraphs?: (string | React.ReactNode)[];
  list?: (string | React.ReactNode)[];
  table?: ArticleTable;
}

interface ArticleProps {
  id?: string;
  number?: string;
  title?: string;
  sections: ArticleSection[];
}

const Article = ({ id, number, title, sections }: ArticleProps) => {
  return (
    <div id={id} className="w-full flex flex-col gap-4 text-sm lg:text-base">
      {title && (
        <h2 className="lg:text-3xl text-xl font-bold">
          <span className="mr-1">{number}.</span> {title}
        </h2>
      )}

      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-3">
          {section.heading && (
            <h4 className="lg:text-xl text-[14px] font-semibold">
              {section.heading}
            </h4>
          )}

          {section.paragraphs &&
            section.paragraphs.map((text, i) => (
              <p key={i} className="text-[12px] lg:text-[16px]">
                {text}
              </p>
            ))}

          {section.list && (
            <ol className="list-decimal  list-inside space-y-2 ml-5">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )}

          {section.table && (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left text-sm">
                <thead>
                  <tr>
                    {section.table.headers.map((header, i) => (
                      <th
                        key={i}
                        className="border border-gray-300 px-4 py-2 font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-gray-300 px-4 py-2"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Article;
