'use strict';

var constantSetting = {
  billStatus: function billStatus() {
    return [
      {cn: '待生效', en: 'not_validity', filter: 'sc'},
      {cn: '待采购', en: 'not_purchase', filter: 'sc,scpu'},
      {cn: '采购待确认', en: 'purchase_to_confirm', filter: 'po,sc,scpu'},
      {cn: '待出运', en: 'not_bookorder', filter: 'sc,po,scpu'},
      {cn: '待订舱', en: 'normal', filter: 'bk'},
      {cn: '待装箱', en: 'wait_reply', filter: 'bk'},
      {cn: '待报关', en: 'load_confirmed', filter: 'bk'},
      {cn: '待收提单', en: 'decl_done', filter: 'bk'},
      {cn: '待议付', en: 'bl_done', filter: 'bk'}
      // { cn: '已出运', en: '', filter: 'scpm,popm,sc,po' }
    ];
  },
  containersType: function containersType() {
    return [{en: '40HC', v: 0}, {en: '40GP', v: 1}, {en: '20GP', v: 2}, {en: 'LCL', v: 3}, {en: 'N/A', v: 10}];
  },
  loadingMethod: function loadingMethod() {
    return [{cn: '送货入仓', v: 0}, {cn: '工厂提柜', v: 2}, {cn: '货代提柜', v: 3}];
  },
  measureUnit: function measureUnit() {
    return [{en: 'metric', cn: '公制'}, {en: 'imperial', cn: '英制'}];
  },
  weightUnit: function weightUnit() {
    return [
      // {en: 'mg', cn: '毫克', tag: '公制', tag_en: 'cn', rate: 1},
      {en: 'g', cn: '克', tag: '公制', tag_en: 'metric', rate: 1000}, {
        en: 'KGS',
        cn: '千克',
        tag: '公制',
        tag_en: 'metric',
        rate: 1000000
      }, {en: 'T', cn: '吨', tag: '公制', tag_en: 'metric', rate: 1000000000}, {
        en: 'lb',
        cn: '磅',
        tag: '英制',
        tag_en: 'imperial',
        rate: 453592.4
      }, {en: 'oz', cn: '盎司', tag: '英制', tag_en: 'imperial', rate: 28349.5}
    ];
  },
  lengthtUnit: function lengthtUnit() {
    return [{en: 'mm', cn: '毫米', tag: '公制'}, {en: 'dm', cn: '分米', tag: '公制'}, {en: 'cm', cn: '厘米', tag: '公制'}, {
      en: 'm',
      cn: '米',
      tag: '公制'
    }, {en: 'in', cn: '英尺', tag: '英制'}, {en: 'ft', cn: '英寸', tag: '英制'}];
  },
  volumeUnit: function volumeUnit() {
    return [{en: 'L', cn: '升', tag: '公制'}, {en: 'mL', cn: '毫升', tag: '公制'}, {
      en: 'gal',
      cn: '英制加仑',
      tag: '英制'
    }, {en: 'pt', cn: '品脱', tag: '英制'}];
  },
  pieceworkUnit: function pieceworkUnit() {
    return [{en: 'PCS', cn: '个', tag: '公制'}, {en: 'SETS', cn: '套', tag: '公制'}, {
      en: 'PAIRS',
      cn: '双',
      tag: '公制'
    }, {en: 'DOZENS', cn: '打', tag: '公制'}, {en: 'CTNS', cn: '箱', tag: '公制'}, {
      en: 'PKGS',
      cn: '件',
      tag: '公制'
    }, {en: 'PLTS', cn: '托', tag: '公制'}, {en: 'mm', cn: '毫米', tag: '公制'}, {en: 'dm', cn: '分米', tag: '公制'}, {
      en: 'cm',
      cn: '厘米',
      tag: '公制'
    }, {en: 'm', cn: '米', tag: '公制'}, {en: 'in', cn: '英尺', tag: '英制'}, {en: 'ft', cn: '英寸', tag: '英制'}, {
      en: 'dm³',
      cn: '立方分米',
      tag: '公制'
    }, {en: 'mm³', cn: '立方毫米', tag: '公制'}, {en: 'cm³', cn: '立方厘米', tag: '公制'}, {en: 'm³', cn: '立方米', tag: '公制'},
      // {en: 'mg', cn: '毫克', tag: '公制'},
      {en: 'g', cn: '克', tag: '公制'}, {en: 'KGS', cn: '千克', tag: '公制'}, {en: 'MT', cn: '公吨', tag: '公制'}, {
        en: 'lb',
        cn: '磅',
        tag: '英制'
      }, {en: 'oz', cn: '盎司', tag: '英制'}, {en: 'L', cn: '升', tag: '公制'}, {en: 'mL', cn: '毫升', tag: '公制'}, {
        en: 'gal',
        cn: '英制加仑',
        tag: '英制'
      }, {en: 'pt', cn: '品脱', tag: '英制'}
    ];
  },
  tranType: function tranType() {
    return [{en: 'BY SEA', cn: '海运'}, {en: 'BY AIR', cn: '空运'}, {en: 'BY TRUCK', cn: '公路运输'}, {
      en: 'BY TRAIN',
      cn: '铁路运输'
    }
      // {en: 'BY EXPRESS', cn: '邮包运输'}
    ];
  },
  tranTypeSea: function tranTypeSea() {
    return [{en: 'FCL', cn: '整箱'}, {en: 'LCL', cn: '拼箱'}];
  },
  currencyType: function currencyType() {
    return [{tag: 'Renminbi Yuan', cn: '人民币', en: 'CNY'}, {tag: 'Euro', cn: '欧元', en: 'EUR'}, {
      tag: 'Pound, Sterling',
      cn: '英镑',
      en: 'GBP'
    }, {tag: 'U.S.Dollar', cn: '美元', en: 'USD'}];
  },
  tradeTerm: function tradeTerm() {
    return [{en: 'FOB', type: '1'}, {en: 'CIF', type: '2'}, {en: 'FCA', type: '1'}, {en: 'CFR', type: '2'}, {en: 'CPT', type: '2'}, {en: 'CIP', type: '2'}, {en: 'DDP', type: '2'}, {en: 'DDU', type: '2'}, {en: 'EXW', type: '2'}, {en: 'DAP', type: '2'}];
  },
  packTerm: function packTerm() {
    return [{en: 'carton', cn: '纸箱'}, {en: 'bulk', cn: '散装'}];
  },
  freightTerm: function freightTerm() {
    return [{en: 'FREIGHT PREPAID', cn: '运费预付'}, {en: 'FREIGHT COLLECT', cn: '运费到付'}];
  },
  transportClause: function transportClause() {
    return [{en: 'CY-CY'}, {en: 'CY-CFS'}, {en: 'CFS-CY'}, {en: 'CFS-CFS'}];
  },
  ladingBillType: function ladingBillType() {
    return [{en: 'ORIGINAL', cn: '正本'}, {en: 'TELEX RELEASE', cn: '电放'}, {en: 'FCR', cn: '货物收据'}, {
      en: 'SEA WAYBILL',
      cn: '海运单'
    }];
  },
  ladingBillTypeBooking: function ladingBillTypeBooking() {
    return [{en: 'ORIGINAL', cn: '正本'}, {en: 'TELEX RELEASE', cn: '电放'}, {en: 'FOB', cn: '异地放单'}];
  },
  paymentType: function paymentType() {
    return [{en: 'T/T', selectable: ['2', '3', '4', '5', '6', '7']}, {en: 'L/C', selectable: ['3', '8']}, {
      en: 'D/P',
      selectable: ['3', '8']
    }, {en: 'D/A', selectable: ['3', '8']}, {
      en: 'deposit',
      selectable: ['1', '4']
    }, {en: 'L/C at sight'}, {en: 'D/P at sight'}, {en: 'D/A at sight'}];
  },
  paymentNewType: function paymentNewType() {
    return [{en: '100% T/T 30 days after sales contract'}, {en: '100% T/T 60 days after sales contract'}, {en: '100% T/T 90 days after sales contract'}, {en: '100% T/T 120 days after sales contract'}, {en: '100% T/T against copy of B/L'}, {en: '100% T/T against full set of copy shipping docs'}, {en: '30% T/T deposit, 70% against copy of B/L'}, {en: '30% T/T deposit, 70% before shipment'}, {en: '20% T/T deposit, 80% against copy of B/L'}, {en: '20% T/T deposit, 80% before shipment'}, {en: '100% T/T in advance after sales contract'}, {en: '100% T/T in advance before shipment'}, {en: '100% L/C at sight'}, {en: '100% D/P at sight'}, {en: '100% D/A at sight'}, {en: '100% D/A 30 days after sight'}, {en: '100% D/A 60 days after sight'}];
  },
  paymentSupplierTime: function paymentSupplierTime() {
    return [{en: 'after signed', cn: '合同签订后', selectable: ['1']},
      {en: 'before delivery',cn: '交货前', selectable: ['1', '2']},
      { en: 'after shipping', cn: '货物出运后', selectable: ['1'] }
    ];
  },
  paymentCutPointMixCond: function paymentCutPointMixCond() {
    return [{en: 'before shipment', type: '1'}, {en: 'against copy of B/L', type: '2'}, {
      en: 'after B/L date',
      type: '3'
    }, {en: 'after sales contract', type: '4'}, {
      en: 'against full set of copy shipping docs',
      type: '5'
    }, {en: 'against receipt of original shipping docs', type: '6'}, {
      en: 'after receipt of goods',
      type: '7'
    }, {en: 'after sight', type: '8'}];
  },
  paymentSupplierType: function paymentSupplierType() {
    return [{en: '电汇', type: '1'}, {en: '带款提货', type: '2'}];
  },
  paymentCutPoint: function paymentCutPoint() {
    return [{en: 'before'}, {en: 'after'}, {en: 'against'}];
  },
  paymentCond: function paymentCond() {
    return [{en: 'before shipment'}, {en: 'after receipt of goods'}, {en: 'after B/L date'}, {en: 'after sales contract'}, {en: 'against full set of copy shipping docs'}, {en: 'against receipt of original shipping docs'}, {en: 'against copy of B/L'}, {en: ''}];
  },
  express: function express() {
    return [{cn: '顺丰'}, {cn: '申通'}, {cn: '圆通'}, {cn: '中通'}, {cn: '百世汇通'}, {cn: '韵达'}, {cn: '天天'}, {cn: 'EMS'}, {cn: '宅急送'}, {cn: 'DHL'}, {cn: 'Fedex'}, {cn: 'TNT'}, {cn: 'UPS'}];
  },
  innerPacking: function innerPacking() {
    return [{en: 'brownbox', cn: '棕盒'}
      // {en: 'BLISTER CARD', cn: '吸卡'},
      // {en: 'DOUBLE BLISTER', cn: '双泡'},
      // {en: 'PVC BOX', cn: 'PVC盒'},
      // {en: 'TIE CARD', cn: '绑卡'},
      // {en: 'HANGTAG', cn: '吊卡'},
      // {en: 'WINDOW BOX', cn: '开窗彩盒'},
      // {en: 'WHITE BOX', cn: '白盒'},
      // {en: 'OPP BAG', cn: 'opp袋'},
      // {en: 'HEAD CARD+POLY BAG', cn: '卡头+塑料袋'},
      // {en: 'DISPLAY BOX', cn: '展示盒'},
      // {en: 'COLOR SLEEVE', cn: '绕卡'},
      // {en: 'MAIL BOX', cn: '中性邮购盒'},
      // {en: 'PVC boc with insert card', cn: 'PVC盒子+衬卡'},
      // {en: 'sticker', cn: '彩贴'},
      // {en: 'PVC lid with paper cover', cn: 'PVC盖子+纸托'},
      // {en: 'shrink', cn: '热收缩'},
      // {en: 'shrinking with sticker', cn: '热收缩+不干胶'},
      // {en: 'shrink with color label', cn: '彩标+POF收缩包装'}
    ];
  },
  shipment: function shipment() {
    return [{en: 'After sales contract date', type: '1'}, {en: 'After Receipt of Pre-Payment', type: '2'}];
  },
  tradeOptionA: function tradeOptionA() {
    return [{cn: '承兑汇票'}, {cn: '电汇'}];
  },
  tradeOptionB: function tradeOptionB() {
    return [{cn: '需方预付至供方指定账号后'}, {cn: '供需双方自合同日'}, {cn: '供方提供样品后'}, {cn: '需方验货合格后'}, {cn: '需方付清全款后'}];
  },
  tradeOptionC: function tradeOptionC() {
    return [{cn: '供方发货'}, {cn: '需方付款'}];
  },
  expressComs: function expressComs() {
    return [
      {en: 'DHL', cn: 'DHL'},
      {en: 'EMS', cn: 'EMS'},
      {en: 'TNT', cn: 'TNT'},
      {en: 'UPS', cn: 'UPS'},
      {en: 'FEDEX', cn: 'FEDEX'},
      {en: 'SF', cn: '顺丰'},
      {en: 'TACT', cn: '圆通'},
      {en: 'STO', cn: '申通'}
    ];
  },
  testingStandard: function testingStandard() {
    return [{en: 'CE'}, {en: 'ROHS'}, {en: 'UL'}, {en: 'REACH'}, {en: 'LFGB'}, {en: 'BS'}, {en: 'GS'}];
  },
  testingResult: function testingResult() {
    return [{en: 'Pass'}, {en: 'Fail'}];
  },
  sampleType: function sampleType() {
    return [{en: 'Development sample', cn: '开发样'}, {en: 'Confirm sample', cn: '确认样'}, {
      en: 'Pre-production sample',
      cn: '产前样'
    }, {en: 'Test sample', cn: '测试样'}, {en: 'Bulk sample', cn: '大货样'}];
  },
  sampleResult: function sampleResult() {
    return [{en: 'Qualified', cn: '合格'}, {en: 'Unqualified', cn: '不合格'}];
  },
  scMissionProcess: function scMissionProcess() {
    return [{en: 'after_pi', cn: 'SC签订后'}, {en: 'before_etd', cn: 'ETD前'}, {en: 'after_etd', cn: 'ETD后'}];
  },
  puMissionProcess: function puMissionProcess() {
    return [{en: 'after_pu', cn: 'PO签订后'}, {en: 'before_delivery', cn: '交货期前'}];
  },
  commission: function commission() {
    return [{cn: '无', en: 'none'}, {cn: '明佣', en: 'shown on invoice'}, {cn: '暗佣', en: 'not shown on invoice'}];
  },
  executive: function executive() {
    return [{cn: '我司'}, {cn: '供应商'}, {cn: '客户'}];
  },
  expenseType: function expenseType() {
    return [{cn: '采购款项'}, {cn: '货代费用'}, {cn: '检测费用'}, {cn: '验货费用'}, {cn: '外商佣金'}];
  },
  purcharsePack: function purcharsePack() {
    return [{en: 'Colorbox', cn: '彩盒'}, {en: 'Blistercard', cn: '吸塑卡'}, {
      en: 'Doubleblister',
      cn: '双吸塑'
    }, {en: 'Whitebox with colorlable', cn: '白盒+彩标'}, {
      en: 'Brownbox with colorlable',
      cn: '棕盒+彩标'
    }, {en: 'Pvc tube with lable', cn: 'PVC桶'}, {en: 'Pvcbox with lable', cn: 'PVC盒'}, {
      en: 'Pvc sleeve',
      cn: 'PVC套'
    }, {en: 'Polybag with header', cn: '卡头+OPP袋(吊卡)'}, {en: 'Hangtag', cn: '吊牌'}, {
      en: 'Polybag',
      cn: '塑料袋'
    }, {en: 'Loose packing', cn: '散装'}, {en: 'Whitebox', cn: '白盒'}, {en: 'Brownbox', cn: '棕盒'}, {
      en: 'Displaybox',
      cn: '展示盒'
    }, {en: 'Tie card', cn: '绑卡'}, {en: 'Window box', cn: '开窗彩盒'}, {en: 'Opp bag', cn: 'opp袋'}, {
      en: 'Color sleeve',
      cn: '绕卡'
    }, {en: 'Mail box', cn: '中性邮购盒'}, {en: 'Pvc box with insert card', cn: 'PVC盒子＋衬卡'}, {
      en: 'Sticker',
      cn: '彩贴'
    }, {en: 'Pvc lid with paper cover', cn: 'PVC盖子＋纸托'}, {en: 'Shrink', cn: '热收缩'}, {
      en: 'Shrinking with sticker',
      cn: '热收缩＋不干胶'
    }, {en: 'Shrinking with color label', cn: '彩标＋POF收缩包装'}, {
      en: 'Color label',
      cn: '彩卡'
    }, {en: 'hangtag and carry bag', cn: '吊卡＋手提袋'}, {
      en: 'stacking',
      cn: '堆叠包装'
    }, {en: 'Brown Box  with color label＋stack', cn: '带彩贴的棕箱＋堆叠包装'},
    {en: 'SLEEVE CARD', cn: '围卡'}];
  },
  prodMaterial: function prodMaterial() {
    return [{en: '铁', cn: '铁'}, {en: '檀木', cn: '檀木'}, {en: '铜', cn: '铜'}
      // {en: 'whitebox with colorlable', cn: '白盒+彩标'},
      // {en: 'brownbox with colorlable', cn: '棕盒+彩标'},
      // {en: 'colorsleeve', cn: '彩卡'},
      // {en: 'pvc tube with lable', cn: 'PVC桶'},
      // {en: 'pvcbox with lable', cn: 'PVC盒'},
      // {en: 'pvc sleeve', cn: 'PVC套'},
      // {en: 'polybag with header', cn: '卡头+OPP袋(吊卡)'},
      // {en: 'hangtag', cn: '吊牌'},
      // {en: 'polybag', cn: '塑料袋'},
      // {en: 'loose packing', cn: '散装'},
      // {en: 'whitebox', cn: '白盒'},
      // {en: 'brownbox', cn: '棕盒'},
      // {en: 'displaybox', cn: '展示盒'}
    ];
  },
  alterReason: function () {
    var reason = {
      C1: '客户订金未付',
      C2: '客户货款未付',
      C3: '客户不清关',
      C4: '关键资料延迟（包装、唛头、参数等）',
      C5: '客户要求延期',
      C6: '客户要求分批',
      F1: '工厂交货延期',
      F2: '产品检测不合格',
      S1: '装箱量计算错误'
    }
    var data = []
    for (var i in arguments) {
      var field = arguments[i].toUpperCase()
      reason[field] && data.push(reason[field])
    }
    data.length || (data = Object.values(reason))
    return data
  }
};

var constantMap = {};
var locale = 'en';
;(function (global) {
  if (typeof exports === 'object' && typeof module !== 'undefined' ){

  } else {
    locale =global.locale || 'cn'
  }
}(this, (function () { 'use strict'

})));

Object.keys(constantSetting).forEach(function (key) {
  var item = constantSetting[key];
  Object.defineProperty(constantMap, key, {
    get: function get() {
      var values = item();
      var arr = [];
      values.forEach(function (v) {
        arr.push(Object.assign(v, {value: v['en'] || v['cn'], txt: v[locale] || v['en']}));
      });
      return arr;
    }
  });
});

function constantAbbr(arr) {
  return arr.reduce(function (pre, c) {
    pre.push(c.value);
    return pre;
  }, []);
}

function paymentMixCond(paymentValue) {
  var paymentTypes = constantMap['paymentType'];
  var MixConds = constantMap['paymentCutPointMixCond'];
  var payType = paymentTypes.contains(function (item) {
    return item['value'] === paymentValue;
  });
  var MixCondSelectable = [];
  if (payType && Array.isArray(payType.selectable)) {
    MixConds.forEach(function (item) {
      var v = payType.selectable.contains(item.type);
      v && MixCondSelectable.push(item);
    });
  }
  return MixCondSelectable;
}

function paymentSupMixCond(paymentValue) {
  var paymentTypes = constantMap['paymentSupplierTime']||[];
  var MixConds = constantMap['paymentSupplierType'] ||[];
  var MixCondSelectable = [];
  if (!paymentValue || !paymentValue.txt) return MixCondSelectable;
  if (paymentValue.txt) paymentValue = paymentValue.txt;
  var t = undefined;
  paymentTypes.forEach(function (item) {
    if (item.txt === paymentValue) {
      t = item;
    }
  });
  if (t && Array.isArray(t.selectable)) {
    MixConds.forEach(function (item) {
      var v = t.selectable.contains(item.type);
      v && MixCondSelectable.push(item);
    });
  }
  return MixCondSelectable;
}

function filter(arr, f) {
  var n = []
  arr.forEach(function (v) {
    if (f(v)) {
      n.push(v)
    }
  })
  return n
}

function Constant(type, abbr) {
  if (typeof abbr === 'boolean') {
    return constantAbbr(constantMap[type]);
  } else if (typeof abbr === 'function') {
    return filter(constantMap[type], abbr)
  } else {
    return (constantMap[type]) || [];
  }
}

Constant.paymentMixCond = paymentMixCond
Constant.paymentSupMixCond = paymentSupMixCond

module.exports = Constant;
