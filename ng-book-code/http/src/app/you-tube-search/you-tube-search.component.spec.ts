import {
  async,
  fakeAsync,
  inject,
  ComponentFixture,
  TestBed,
  tick
} from '@angular/core/testing';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { YouTubeSearchComponent } from './you-tube-search.component';
import { SearchResultComponent } from './search-result.component';
import { SearchBoxComponent } from './search-box.component';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YouTubeSearchService
} from './you-tube-search.service';

const defaultResponse = {
  items: [
    {
      id: { videoId: 'VIDEO_ID' },
      snippet: {
        title: 'TITLE',
        description: 'DESCRIPTION',
        thumbnails: {
          high: { url: 'THUMBNAIL_URL' }
        }
      }
    }
  ]
};

describe('YouTubeSearchComponent', () => {
  let component: YouTubeSearchComponent;
  let fixture: ComponentFixture<YouTubeSearchComponent>;
  let httpMock: HttpTestingController;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          YouTubeSearchComponent,
          SearchResultComponent,
          SearchBoxComponent
        ],
        imports: [HttpClientTestingModule],
        providers: [
          YouTubeSearchService,
          { provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
          { provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' }
        ]
      });
    })
  );

  beforeEach(() => {
    async(
      inject([HttpTestingController], _httpMock => {
        fixture = TestBed.createComponent(YouTubeSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        httpMock = _httpMock;
      })
    );
  });

  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    })
  );

  describe('search', () => {
    function search(term: string, response: any, callback) {
      return inject(
        [YouTubeSearchService, HttpTestingController],
        fakeAsync((service, httpMock) => {
          let res;

          // search
          service.search(term).subscribe(_res => {
            res = _res;
          });

          const req = httpMock.expectOne({ method: 'GET' });
          req.flush(response);
          tick();

          callback(req.request, res);
        })
      );
    }

    it(
      'parses YouTube video id',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.id).toEqual('VIDEO_ID');
      })
    );

    it(
      'parses YouTube video title',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.title).toEqual('TITLE');
      })
    );

    it(
      'parses YouTube video description',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.description).toEqual('DESCRIPTION');
      })
    );

    it(
      'parses YouTube video thumbnail',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.description).toEqual('DESCRIPTION');
      })
    );

    it(
      'sends the query',
      search('term', defaultResponse, (req, res) => {
        expect(req.url).toContain('q=term');
      })
    );

    it(
      'sends the API key',
      search('term', defaultResponse, (req, res) => {
        expect(req.url).toContain('key=YOUTUBE_API_KEY');
      })
    );

    it(
      'uses the provided YouTube URL',
      search('term', defaultResponse, (req, res) => {
        expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
      })
    );
  });
});
