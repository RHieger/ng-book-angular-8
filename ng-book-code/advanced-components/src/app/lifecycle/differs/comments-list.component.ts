/* tslint:disable:max-line-length,quotemark */
import {
  Component,
  IterableDiffers,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html'
})
export class CommentsListComponent implements DoCheck {
  comments: any[];
  iterable: boolean;
  authors: string[];
  texts: string[];
  differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];

    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
      'Really cool!',
      'Thanks!'
    ];

    this.addComment();
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomItem(array: string[]): string {
    const pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }

  addComment(): void {
    this.comments.push({
      author: this.getRandomItem(this.authors),
      comment: this.getRandomItem(this.texts),
      likes: this.getRandomInt(20)
    });
  }

  removeComment(comment) {
    const pos = this.comments.indexOf(comment);
    this.comments.splice(pos, 1);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comments);

    if (changes) {
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }
}
