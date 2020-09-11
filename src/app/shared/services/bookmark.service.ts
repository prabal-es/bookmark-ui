import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookmarkService {

    private readonly BOOKMARK = environment.bookmark_service_api_url + '/api/v1/';

}
