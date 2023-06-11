import React from "react";

const TableCard = ({ urlData }) => {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">OriginalUrl</th>
                  <th scope="col">ShortUrl</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">TotalHits</th>
                </tr>
              </thead>
              <tbody>
                {urlData.map((item, index) => (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.originalUrl}</td>
                    <td>
                      <a
                        href={`https://urlshortner-rum2.onrender.com/{item.shortUrlId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://url-shortner-backend-0m3g.onrender.com/
                        {item.shortUrlId}
                      </a>
                    </td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td
                      className={
                        item.hitCount === 0
                          ? " text-center text-danger"
                          : " text-center text-success"
                      }
                    >
                      {item.hitCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCard;
