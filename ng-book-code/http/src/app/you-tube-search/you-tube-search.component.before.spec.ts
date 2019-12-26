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

describe('YouTubeSearchComponent (before)', () => {
  let component: YouTubeSearchComponent;
  let fixture: ComponentFixture<YouTubeSearchComponent>;

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
    fixture = TestBed.createComponent(YouTubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('search', () => {
    it(
      'parses YouTube response',
      inject(
        [YouTubeSearchService, HttpTestingController],
        fakeAsync((service, httpMock) => {
          let res;

          service.search('hey').subscribe(_res => {
            res = _res;
          });

          const req = httpMock.expectOne({ method: 'GET' });
          req.flush({
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
          });

          tick();

          const video = res[0];
          expect(video.id).toEqual('VIDEO_ID');
          expect(video.title).toEqual('TITLE');
          expect(video.description).toEqual('DESCRIPTION');
          expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');

          httpMock.verify();
        })
      )
    );
  });
});
