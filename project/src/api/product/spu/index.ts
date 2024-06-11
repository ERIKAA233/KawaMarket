//SPU管理模块的接口
import request from '@/utils/request'
import type { SkuInfoData,SkuData,SpuData,AllTradeMark, HasSaleAttrResponseData, HasSpuResponseData, SaleAttrResponseData, SpuHasImg } from './type'
enum API {
  //获取已有spu数据
  HASSPU_URL = '/admin/product/',
  ALLTRADEMARK_URL ='/admin/product/baseTrademark/getTrademarkList',
  //获取某个SPU下的全部售卖商品图片数据
  IMAGE_URL ='/admin/product/spuImageList/',
  //获取某一个SPU下的全部的已有的销售属性接口地址
  SPUHASSALEATTR_URL ='/admin/product/spuSaleAttrList/',
  //获取整个项目全部的销售属性
  ALLSALEATTR_URL='/admin/product/baseSaleAttrList',
  //追加新SPU
  ADDSPU_URL ='/admin/product/saveSpuInfo',
  //更新已有SPU
  UPDATESPU_URL ='/admin/product/updateSpuInfo',
  //追加sku地址
  ADDSKU_URL ='/admin/product/saveSkuInfo',
  //查看sku
  SKUINFO_URL ='/admin/product/findBySpuId/',
  //删除sku
  REMOVESKU_URL ='/admin/product/deleteSpu/'
}
//获取某一个三级分类下已有的SPU数据
export const reqHasSpu = (page: number, limit: number, category3Id: string | number) => request.get<any, HasSpuResponseData>(API.HASSPU_URL + `${page}/${limit}?category3Id=${category3Id}`)
//获取全部SPU品牌数据
export const reqAllTradeMark=()=>request.get<any,AllTradeMark>(API.ALLTRADEMARK_URL);
//获取某一个SPU下全部商品的图片地址
export const reqSpuImageList =(spuId:number)=>request.get<any,SpuHasImg>(API.IMAGE_URL+spuId)
//获取某一个已有的SPU拥有多少个销售属性
export const reqSpuHasSaleAttr = (spuId: number) => request.get<any, SaleAttrResponseData>(API.SPUHASSALEATTR_URL+spuId)
//获取全部销售属性
export const reqAllSaleAttr=()=>request.get<any,HasSaleAttrResponseData>(API.ALLSALEATTR_URL)
//添加一个新的SPU接口
//更新SPU接口
export const reqAddOrUpdateSpu=(data:SpuData)=>{
  //如果有id 更新已有spu
  if(data.id){
    return request.post<any,any>(API.UPDATESPU_URL,data)
  }else{
    return request.post<any,any>(API.ADDSPU_URL,data)
  }
}

//添加sku请求方法
export const reqAddSku=(data:SkuData)=>request.post<any,any>(API.ADDSKU_URL,data)
//获取sku数据
export const reqSkuList=(spuId:number|string)=>request.get<any,SkuInfoData>(API.SKUINFO_URL+spuId)
//删除sku
export const reqRemoveSpu=(spuId:number|string)=>request.delete<any>(API.REMOVESKU_URL+spuId)