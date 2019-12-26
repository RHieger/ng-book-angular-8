import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  fakeAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  advance,
  createRoot,
  RootCmp,
  configureMusicTests
} from '../test/test.module';

import { MockSpotifyService } from '../test/spotify.service.mock';
import { SpotifyService } from '../spotify.service';
import { ArtistComponent } from './artist.component';

describe('ArtistComponent', () => {
  beforeEach(async(() => {
    configureMusicTests();
  }));

  describe('initialization', () => {
    it('retrieves the artist', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        router.navigateByUrl('/artists/2');
        advance(fixture);

        expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith('2');
      })));
  });

  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
             (router: Router, location: Location) => {
        const fixture = createRoot(router, RootCmp);
        expect(location.path()).toEqual('/');

        router.navigateByUrl('/artists/2');
        advance(fixture);
        expect(location.path()).toEqual('/artists/2');

        const artist = fixture.debugElement.children[1].componentInstance;
        artist.back();
        advance(fixture);

        expect(location.path()).toEqual('/');
      })));
  });

  describe('renderArtist', () => {
    it('renders album info', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        const artist = {name: 'ARTIST NAME', images: [{url: 'IMAGE_1'}]};
        mockSpotifyService.setResponse(artist);

        router.navigateByUrl('/artists/2');
        advance(fixture);

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').innerHTML).toContain('ARTIST NAME');
        expect(compiled.querySelector('img').src).toContain('IMAGE_1');
      })));
  });
});
