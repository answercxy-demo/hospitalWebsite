import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UtilServiceService } from './util-service.service';
import { StaticPath } from '../common/static-path';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  host = this.staticPath.API_PATH;
  //host = '//127.0.0.1/fixtures/hospital/';
  //host = '//www.xiyubaba.com/fixtures/hospital/';

  constructor(private http: HttpClient,
    private utilServiceService: UtilServiceService,
    private staticPath: StaticPath) { }

  /**
     * @description: 获取头部图片列表
     * @param {} 
     * @return: 
     */
  getTopImgs(apiName: string = '', options = {}): Observable<any> {
    const api = 'carouse/' + apiName;
    //const api = 'topImgs.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('topImgs', []))
      );
  }

  /**
   * @description: 获取疾病列表
   * @param {} 
   * @return: 
   */
  getDiseaseList(options = {}): Observable<any> {
    const api = 'disease/homePageLoading';
    //const api = 'diseaseList.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getDiseaseList', []))
      );
  }

  /**
   * @description: 获取疾病详情
   * @param {} 
   * @return: 
   */
  getDiseaseDetail(options = {}): Observable<any> {
    const api = 'disease/homePageClick';
    //const api = 'diseaseDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getDiseaseDetail', []))
      );
  }

  /**
   * @description: 获取前4条新闻列表
   * @param {} 
   * @return: 
   */
  getLatestNewsList(options = {}): Observable<any> {
    const api = 'topNews/homePageLoading';
    //const api = 'newsList.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getLatestNewsList', []))
      );
  }

  /**
   * @description -获取新闻详情
   * @param options 
   * @return: 
   */
  getNewsDetail(options = {}): Observable<any> {
    const api = 'topNews/homePageClick';
    //const api = 'newsDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getNewsDetail', []))
      );
  }

  /**
   * @description: 获取科室信息列表
   * @param {} 
   * @return: 
   */
  getDepartmentList(options = {}): Observable<any> {
    const api = 'section/navigationBarClick';
    //const api = 'departmentList.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getDepartmentList', []))
      );
  }

  /**
   * @description -获取新闻详情
   * @param options 
   * @return: 
   */
  getDepartmentDetail(options = {}): Observable<any> {
    const api = 'section/sectionNameClick';
    //const api = 'departmentDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getDepartmentDetail', []))
      );
  }

  /**
   * @description: 获取关于我们的信息
   * @param {type} 
   * @return: 
   */
  getAboutUs(options = {}): Observable<any> {
    const api = 'aboutUs/introduction';
    //const api = 'departmentDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getAboutUs', {}))
      );
  }

  /**
   * @description: 获取关于专家的信息
   * @param {type} 
   * @return: 
   */
  getAboutDoctor(options = {}): Observable<any> {
    const api = 'expertIntro';
    //const api = 'departmentDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getAboutDoctor', []))
      );
  }

  /**
   * @description: 获取就医环境的信息
   * @param {type} 
   * @return: 
   */
  getEnviroment(apiName: string = '', options = {}): Observable<any> {
    const api = 'medicalEnvironmentFirst/' + apiName;
    //const api = 'departmentDetail.php';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getAboutDoctor', []))
      );
  }

  /**
   * @description: 获取就医导航信息 
   * @param {type} 
   * @return: 
   */
  getHospitalGuide(options = {}): Observable<any> {
    const api = 'medicalNavigationFirst';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getHospitalGuide', []))
      );
  }

  /**
   * @description: 获取招聘类型列表 
   * @param {type} 
   * @return: 
   */
  getHospitalRecruitTypeList(options = {}): Observable<any> {
    const api = 'queryRecruitmentType';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getHospitalRecruitTypeList', []))
      );
  }

  /**
   * @description: 获取招聘详情列表 
   * @param {type} 
   * @return: 
   */
  getHospitalRecruitDetailList(id = '', options = {}): Observable<any> {
    const api = 'queryRecruitments/' + id;
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getHospitalRecruitDetailList', []))
      );
  }

  /**
   * @description: 获取医院招聘详情
   * @param {type} 
   * @return: 
   */
  getHospitalRecruitDetail(id = '', options = {}): Observable<any> {
    const api = 'queryRecruitments' + id;
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.get<any>(`${this.host + api + params}`)
      .pipe(
        tap(_ => {
          //do something for current status
        }),
        catchError(this.handleError<any>('getHospitalRecruitDetail', []))
      );
  }

  /**
   * @description: 提交联系我们表单数据
   * @param {type} 
   * @return: 
   */
  submitSuggest(body = {}, options = {}): Observable<any> {
    const api = 'contactUs/formOne';
    const params = this.utilServiceService.setUrlStr(options);

    return this.http.post<any>(`${this.host + api + params}`, body).pipe(
      tap(_ => {
        //do something for current status
      }),
      catchError(this.handleError<any>('getHospitalRecruit', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
