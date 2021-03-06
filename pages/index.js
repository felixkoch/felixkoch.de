import Head from "next/head";
import Page from "../components/Page";

export default () => (
  <Page title="Felix Koch" noHeader={true} stickyFooter={true}>
    <Head>
      <meta name="description" content="Vater, Entwickler, Imker" />
    </Head>
    <div className="container start">
      <div className="d-md-flex justify-content-center">
        <div className="p-3">
          <img
            src="/static/web.jpg"
            alt="Felix Koch"
            className="rounded-circle profilbild"
          />
        </div>
        <div className="p-3">
          <h1>
            Felix Koch
            <br />
            <small className="text-muted">Vater, Entwickler, Imker</small>
          </h1>
          <div className="d-flex">
            <a href="https://github.com/felixkoch" className="mr-4">
              <i className="fab fa-github mr-2" />
              GitHub
            </a>

            <a href="https://www.xing.com/profile/Felix_Koch80/">
              <i className="fab fa-xing mr-2" />
              XING
            </a>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
