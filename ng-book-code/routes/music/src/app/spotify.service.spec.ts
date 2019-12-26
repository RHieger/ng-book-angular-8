import { inject, fakeAsync, tick, TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import {
  HttpClient,
  HttpBackend,
  HttpRequest,
  HttpResponse,
  HttpHandler
} from "@angular/common/http";

import { SpotifyService } from "./spotify.service";

describe("SpotifyService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpotifyService]
    });
  });

  // sets up an expectation that the correct URL will being requested
  function expectURL(backend: HttpTestingController, url: string) {
    const testRequest = backend.expectOne(url);
    testRequest.flush({ name: "felipe" });
    return testRequest;
  }

  describe("getTrack", () => {
    it("retrieves using the track ID", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((svc, backend) => {
        let res;
        svc.getTrack("TRACK_ID").subscribe(_res => {
          console.log("_res: ", _res);
          res = _res;
        });
        expectURL(backend, "https://api.spotify.com/v1/tracks/TRACK_ID");
        tick();
        expect(res.name).toBe("felipe");

        backend.verify();
      })
    ));
  });

  describe("getArtist", () => {
    it("retrieves using the artist ID", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((svc, backend) => {
        let res;
        svc.getArtist("ARTIST_ID").subscribe(_res => {
          res = _res;
        });
        expectURL(backend, "https://api.spotify.com/v1/artists/ARTIST_ID");
        tick();
        expect(res.name).toBe("felipe");
      })
    ));
  });

  describe("getAlbum", () => {
    it("retrieves using the album ID", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((svc, backend) => {
        let res;
        svc.getAlbum("ALBUM_ID").subscribe(_res => {
          res = _res;
        });
        expectURL(backend, "https://api.spotify.com/v1/albums/ALBUM_ID");
        tick();
        expect(res.name).toBe("felipe");
      })
    ));
  });

  describe("searchTrack", () => {
    it("searches type and term", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((svc, backend) => {
        let res;
        svc.searchTrack("TERM").subscribe(_res => {
          res = _res;
        });
        expectURL(
          backend,
          "https://api.spotify.com/v1/search?q=TERM&type=track"
        );
        tick();
        expect(res.name).toBe("felipe");
      })
    ));
  });
});
