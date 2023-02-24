import useFetch from "../customize/fetch";

const Covid = () => {
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          isLoading === false &&
          dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Country}</td>
              </tr>
            );
          })}

        {isLoading === true && (
          <tr>
            <td colSpan={5}> loading .........</td>
          </tr>
        )}
        {isError === true && (
          <tr>
            <td colSpan={5}> somethingError .........</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Covid;
