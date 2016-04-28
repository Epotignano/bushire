// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { default as Header } from "../components/Header";
import { default as NavBar } from "../components/NavBar";

import { default as Footer } from "../components/Footer";
import { default as NavBarFooter } from "../components/NavBarFooter";
import { default as Copyright } from "../components/Copyright";


class OptionalServices extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className='ui one column grid container'>
          <div className="row">        
            <h1 className="ui header red">有資格ガイド</h1>
            <p>日本政府の認定を受けたプロのガイドです。
            日本の地理や歴史など幅広い知識を持ち、通訳業務だけでなく、観光地についてのガイディング業務も対応可能です。</p>
            <h1 className="ui header red">英語スタッフ</h1> 
            <p>有資格ガイドと異なり、観光地の説明などはできませんが、日常会話以上の英語力を有します。
            ドライバーとのコミュニケーションやショッピング時・ホテルでの簡単な通訳の対応が可能です。</p>
            <h1 className="ui header red">レストラン代行予約</h1>  
            <p>決まった場所での昼食や夕食をご希望の場合にレストランをお客様代わって予約いたします。
            予約手数料は、他のサービスの利用有無に応じて変わりますので、ご希望の際はお問い合わせください。</p> 
            <h1 className="ui header red">荷物車</h1>  
            <p>空港—ホテル間や新幹線利用時など、大きなお荷物での移動時に大変便利なサービスです。ご宿泊先のホテルにお荷物をお運びできますので、身軽に観光してからのホテルチェックインも可能です。</p>    
          </div>
          <div className="row"></div>   
        </div>
        <NavBarFooter />
        <Copyright />
      </div>
    );
  }
}

OptionalServices.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(OptionalServices);
