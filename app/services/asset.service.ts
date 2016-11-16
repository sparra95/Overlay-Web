import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class AssetService {
  private _url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }

  getData() {
    return this._http.get("http://jsonplaceholder.typicode.com/posts")
        .map(res => res.json());
  }

  getModels(): Object[] {
    // https://clara.io/embed/{uuid}?renderer=webgl   --> This is to render the image and interact with it

    return [
      {
        id: '5eb35447-b387-4854-bfc7-ee2f0951e2ef',
        thumbnail: "https://clara.io/api/scenes/5eb35447-b387-4854-bfc7-ee2f0951e2ef/thumbnail.jpg",
        render: "https://clara.io/embed/5eb35447-b387-4854-bfc7-ee2f0951e2ef?renderer=webgl",
        interactive: false
      },
      {
        id: '1a03ac6b-d6b5-4c2d-9f1a-c80068311396',
        thumbnail: "https://clara.io/api/scenes/1a03ac6b-d6b5-4c2d-9f1a-c80068311396/thumbnail.jpg",
        render: "https://clara.io/embed/1a03ac6b-d6b5-4c2d-9f1a-c80068311396?renderer=webgl",
        interactive: false
      },
      {
        id: '01ac9905-f849-46fa-bd57-b662995df3bb',
        thumbnail: "https://clara.io/api/scenes/01ac9905-f849-46fa-bd57-b662995df3bb/thumbnail.jpg",
        render: "https://clara.io/embed/01ac9905-f849-46fa-bd57-b662995df3bb?renderer=webgl",
        interactive: false
      },
      {
        id: 'b733ea40-f35f-4115-a15b-f5a44275f02e',
        thumbnail: "https://clara.io/api/scenes/b733ea40-f35f-4115-a15b-f5a44275f02e/thumbnail.jpg",
        render: "https://clara.io/embed/b733ea40-f35f-4115-a15b-f5a44275f02e?renderer=webgl",
        interactive: false
      }
    ]
  }

}
