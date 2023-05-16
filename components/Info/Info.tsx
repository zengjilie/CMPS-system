import React from "react";
import styles from "./Info.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { InfoType, RecordType, TaskIdType, TaskSetType } from "../../types";
import { setCurrentMovieInfo } from "../../redux/slices/movieInfoSlice";
import { setCurrentTentInfo } from "../../redux/slices/tentInfoSlice";
import { useRouter } from "next/router";
import { addRecord } from "../../redux/slices/recordSlice";

function Info({ type }: { type: string }) {
  const movieInfos: InfoType[] = useSelector(
    (state: any) => state.movieInfo.allInfos
  );
  const tentInfos: InfoType[] = useSelector(
    (state: any) => state.tentInfo.allInfos
  );
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const userid = useSelector((state: any) => state.user.userid);
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;

  const handleInfoClick = (infoNum: number) => {
    if (taskSet === "task_1") {
      dispatch(setCurrentMovieInfo({ infoNum }));
    } else {
      dispatch(setCurrentTentInfo({ infoNum }));
    }

    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: `info${taskId}_${infoNum + 1}`,
      section: "interaction",
      createdat: new Date().toISOString(),
    };
    dispatch(addRecord({ record }));
  };

  if (type === "movie") {
    return (
      <div className={styles["info"]}>
        <div className={styles["info-nav"]}>
          <ul>
            {movieInfos.map((info: InfoType, i: number) => (
              <li
                key={`info${i}`}
                className={`${styles["info-nav-item"]} ${
                  info.on ? styles["on"] : styles["off"]
                }`}
                onClick={() => handleInfoClick(i)}
              >
                {info.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["info-item"]}>
          {movieInfos[0].on && (
            <img
              src="/images/movie-weather.png"
              alt=""
              width="500"
              height="500"
            />
          )}
          {movieInfos[1].on && (
            <img
              src="/images/movie-calendar.jpg"
              alt=""
              width="500"
              height="500"
            />
          )}
          {movieInfos[2].on && (
            <>
              <h5>五一劳动节的发展历史</h5>
              <small>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五一劳动节是一个纪念劳动人民的节日，起源于19世纪末的国际劳工运动。1891年，国际工人代表会议在法国召开，决定从1890年5月1日开始，每年的这一天，全球工人举行示威和罢工，争取劳动条件和权益。1920年，第二国际宣布5月1日为国际劳动节。1949年10月，中华人民共和国成立后，五一劳动节成为我国官方的法定节日。随着时间的推移，五一劳动节从最初的抗议游行演变为放松和庆祝劳动者的节日，人们通过各种活动来庆祝这个节日，如举行游行、举办庆祝活动和演出、旅游和家庭聚会等。
              </small>
            </>
          )}
          {movieInfos[3].on && (
            <>
              <h5>电影院观影注意事项</h5>
              <small>
                1.观影过程中请勿随意出入影厅，中途换人观看电影； <br />
                2.手机请调为静音； <br />
                3.携带食品请到寄存处存放或在入场前食用；
                <br />
                4.请避免用手指或硬物触碰3D眼镜的镜片； <br />
                5.请保持影厅内清洁，勿乱扔杂物。
                <br />
                希望大家配合创造更好的观影环境。
                <br />
              </small>
            </>
          )}
          {movieInfos[4].on && (
            <>
              <h5>天悦电影院的场次安排表</h5>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}>
                      天悦电影院 专属“五一节”购票优惠来袭！
                      从5月1日起所有上映影片：
                    </th>
                  </tr>

                  <tr>
                    <td>
                      天气之子 <br />
                      113分钟 <br />
                      2:00p.m.（仅周末）
                      <br />
                      9:35p.m.（仅周中）
                      <br />
                      <br />
                      不适于10岁以下儿童
                    </td>
                    <td>
                      食肉动物 <br /> 98分钟 <br /> 9:40a.m. <br /> <br />
                      以上场次均不提供优惠票！
                      <br /> 未成年人需要在父母的陪伴下观看
                    </td>
                  </tr>

                  <tr>
                    <td>
                      爱丽丝梦游仙境2：镜中奇遇记 <br /> 115分钟 <br /> 4:30p.m.
                      （仅周中）
                      <br />
                      7:55p.m.（仅周五和周六，不提供优惠票）
                      <br />
                      <br /> 所有年龄均可观看
                    </td>
                    <td>
                      谜 <br /> 119分钟 <br /> 6:00p.m.（仅周末）
                      <br />
                      <br /> 不适于10岁以下儿童
                    </td>
                  </tr>

                  <tr>
                    <td>
                      饥饿游戏 <br /> 142分钟 <br /> 6:30p.m. <br /> <br />
                      以上场次均不提供优惠票！
                      <br />
                      未成年人需要在父母的陪伴下观看
                    </td>
                    <td>
                      狮子王 <br /> 89分钟 <br /> 2:35p.m.（仅周中）
                      <br /> 9:00p.m.（仅周末）
                      <br />
                      <br /> 以上场次均不提供优惠票！
                      <br /> 所有年龄均可观看
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {movieInfos[5].on && (
            <>
              <h5>五一劳动节期间上映影片简介</h5>
              <small>
                天气之子 <br />
                该片讲述了帆高和拥有操控天气能力的阳菜之间的奇幻爱情故事。帆高离家出走来到东京，为超自然杂志撰稿。在雨天中，他遇到了拥有可以让天空放晴的能力的阳菜。电影充满奇幻和浪漫，同时也揭示了人性的温暖和坚韧。
              </small>
              <small>
                爱丽丝梦游仙境2：镜中奇遇记 <br />
                爱丽丝回到伦敦发现陈腐的社会观念，船也被卖了。她再次进入仙境，白皇后请她拯救疯帽子全家。红皇后和“时间”密谋偷取时空魔球，爱丽丝展开追逐。最后疯帽匠一家团聚，皇后姐妹和解，爱丽丝和母亲和解，母女二人开始创业之路。电影讲述了爱丽丝的成长历程和对抗陈规的勇气，充满奇幻和感动。{" "}
              </small>
              <small>
                饥饿游戏 <br />
                在专制的都城中，为维持国家秩序，每年12个行政区要交出少男少女各一名参加饥饿游戏。凯妮丝为了保护妹妹自愿参加，面对死亡她激发强韧的求生意志，成为强力竞争者。同时，另一位选手卡特尼丝掌握生存技能和敏锐直觉，在游戏中寻找生存的先机。在生与死的考验中，她们将面临情感和道德的考量。
              </small>
              <small>
                食肉动物 <br />
                年近三十的莫娜为实现演员梦努力，搬到妹妹姗姆家，姗姆是法国明星。姗姆让莫娜当她的助手，但莫娜越来越嫉妒姗姆的成功，决定介入。姗姆因此失去了自我，莫娜是否能实现自己的想法？
              </small>
              <small>
                谜 <br />
                密码破译专家汤姆与神秘女子克莱尔相遇，但克莱尔的死让汤姆被怀疑为凶手。汤姆开始破译德军密码，揭开克莱尔身上的谜团，同时也暴露了英国政府高层的阴谋。在此过程中，他与助手海斯特相互吸引。
              </small>
              <small>
                狮子王 <br />
                辛巴是荣耀国小王子，叔叔刀疤觊觎王位，谋杀辛巴。辛巴逃亡中结交朋友，长大成为英勇的狮子。后得知国家遭灾，法师的帮助下，他决心复国救民。在朋友和家人的帮助下，辛巴最终获得胜利，领悟责任的真谛。
              </small>
            </>
          )}

          {movieInfos[6].on && (
            <>
              <h5>天悦电影院电影票购买优惠说明</h5>
              <small>
                专属“五一节”购票优惠来袭！天悦电影院提供四类电影票：普通票、打折票、团购票和学生票。
              </small>
              <table>
                <tbody>
                  <tr>
                    <td>普通票</td>
                    <td>50元/张</td>
                  </tr>
                  <tr>
                    <td>打折票</td>
                    <td>30元/张，仅限周二打折日使用</td>
                  </tr>
                  <tr>
                    <td>学生票</td>
                    <td>周末购票可享七折优惠</td>
                  </tr>
                  <tr>
                    <td>团购票</td>
                    <td>十人及以上可享6.5折优惠</td>
                  </tr>
                </tbody>
              </table>
              <small>
                以上优惠不可共享！
                普通票是没有任何优惠活动的正常票价，每部电影的正常票价都是50元/张。
                优惠票为限量票，售完即止！ 购买学生票需要携带学生证原件。
                部分电影场次不提供优惠票。
              </small>
            </>
          )}
          {movieInfos[7].on && (
            <>
              <h5>最喜爱电影排名调查结果</h5>
              <table>
                <tbody>
                  <tr>
                    <th>排名</th>
                    <th>影片名称</th>
                    <th>喜爱人数</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>狮子王</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>爱丽丝梦游仙境2：镜中奇遇记</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>天气之子</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>谜</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
              <small>注：只显示适合初中生观看的影片。</small>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["info"]}>
        <div className={styles["info-nav"]}>
          <ul>
            {tentInfos.map((info: InfoType, i: number) => (
              <li
                key={`info${i}`}
                className={`${styles["info-nav-item"]} ${
                  info.on ? styles["on"] : styles["off"]
                }`}
                onClick={() => handleInfoClick(i)}
              >
                {info.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["info-item"]}>
          {tentInfos[0].on && (
            <img
              src="/images/movie-weather.png"
              alt=""
              width="500"
              height="500"
            />
          )}
          {tentInfos[1].on && (
            <>
              <h5>露营装备清单</h5>
              <table>
                <tbody>
                  <tr>
                    <th>功能</th>
                    <th>装备</th>
                  </tr>
                  <tr>
                    <td>穿着</td>
                    <td>
                      冲锋衣裤等御寒衣物、运动鞋（合脚防滑）、遮阳帽、太阳镜、手套等
                    </td>
                  </tr>
                  <tr>
                    <td>吃饭</td>
                    <td>户外饭盒、水杯、碗筷叉勺等</td>
                  </tr>
                  <tr>
                    <td>其他</td>
                    <td>
                      洗漱用品、相机、防蚊用品、急救包、备用食品、防晒霜等
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {tentInfos[2].on && (
            <>
              <h5>露营地点介绍</h5>
              <small>
                坐落在西北郊的上庄水库是野钓、烧烤、露营的圣地，这里距离城区仅30公里，驱车半小时就能到达，受到众多游人的青睐。露营选在南岸，这里坡度比较平缓，支烤炉、摆食品都很方便。随着野外烧烤越来越受到欢迎，当地居民在上庄水库周边推出了很多配套的服务，在这里无论是烧烤原材料还是烧烤工具一应俱全。
              </small>
            </>
          )}
          {tentInfos[3].on && (
            <>
              <h5>搭建帐篷指南</h5>
              <small>
                家庭帐篷：取出帐篷，先搭好内帐再搭外帐。插入撑杆并放到预定位置，用钉桩固定好。最后整理帐篷内部空间。建议使用锤子固定钉桩，保持通风干燥，晚间检查火源并检查帐篷固定。
              </small>
              <small>
                轻型帐篷：抖开帐篷并钉固一头，将支撑杆穿入槽中并插入黄铜扣固定帐篷底部。打入钉桩，拉紧尼龙带并固定支索。保持通风干燥，晚间检查火源并检查帐篷固定。
              </small>
              <small>晚间睡前检查火源是否熄灭，帐篷是否固定结实。</small>
            </>
          )}
          {tentInfos[4].on && taskId !== "6" && (
            <>
              <h5>帐篷介绍</h5>
              <table>
                <tbody>
                  <tr>
                    <th>类型</th>
                    <th>A1</th>
                    <th>A2</th>
                    <th>B</th>
                    <th>C</th>
                  </tr>

                  <tr>
                    <td>颜色</td>
                    <td colSpan={2}>雅白/黑灰</td>
                    <td>流沙金</td>
                    <td>军绿/卡其/摩卡</td>
                  </tr>
                  <tr>
                    <td>重量</td>
                    <td>3.8kg</td>
                    <td>4.9kg</td>
                    <td>6.8kg</td>
                    <td>2.4kg</td>
                  </tr>
                  <tr>
                    <td>容量</td>
                    <td>4人</td>
                    <td>8人</td>
                    <td>4人</td>
                    <td>2人</td>
                  </tr>
                  <tr>
                    <td>尺寸</td>
                    <td>210*210*140cm</td>
                    <td>250*250*170cm</td>
                    <td>230*230*145cm</td>
                    <td>120*100*130cm</td>
                  </tr>
                  <tr>
                    <td>价格</td>
                    <td>380</td>
                    <td>700</td>
                    <td>480</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>库存</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td> 优点</td>
                    <td>普通家庭适用 有挡雨条 全连底防水 加厚黑胶防晒隔热</td>
                    <td>
                      大空间、适合大家庭出游 有挡雨条 全连底防水
                      加厚黑胶防晒隔热
                    </td>
                    <td>大家庭适用 收纳方便 天幕+自动帐篷二合一</td>
                    <td>轻便小巧 6级防风 高强度防水 通风透气</td>
                  </tr>
                </tbody>
              </table>
              <small>价格：表中所示价格为租赁一晚（不超过24h）的价格。</small>
            </>
          )}
          {tentInfos[4].on && taskId==="6" && (
            <>
              <h5>帐篷介绍</h5>
              <table>
                <tbody>
                  <tr>
                    <th>类型</th>
                    <th>A1</th>
                    <th>A2</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>

                  <tr>
                    <td>颜色</td>
                    <td colSpan={2}>雅白/黑灰</td>
                    <td>流沙金</td>
                    <td>军绿/卡其/摩卡</td>
                    <td>军绿/卡其/摩卡</td>
                  </tr>
                  <tr>
                    <td>重量</td>
                    <td>3.8kg</td>
                    <td>4.9kg</td>
                    <td>6.8kg</td>
                    <td>2.4kg</td>
                    <td>4.5kg</td>
                  </tr>
                  <tr>
                    <td>容量</td>
                    <td>4人</td>
                    <td>8人</td>
                    <td>4人</td>
                    <td>2人</td>
                    <td>6人</td>
                  </tr>
                  <tr>
                    <td>尺寸</td>
                    <td>210*210*140cm</td>
                    <td>250*250*170cm</td>
                    <td>230*230*145cm</td>
                    <td>120*100*130cm</td>
                    <td>230*230*170cm</td>
                  </tr>
                  <tr>
                    <td>价格</td>
                    <td>380</td>
                    <td>700</td>
                    <td>480</td>
                    <td>200</td>
                    <td>560</td>
                  </tr>
                  <tr>
                    <td>库存</td>
                    <td>2</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>优点</td>
                    <td>普通家庭适用 有挡雨条 全连底防水 加厚黑胶防晒隔热</td>
                    <td>
                      大空间、适合大家庭出游 有挡雨条 全连底防水
                      加厚黑胶防晒隔热
                    </td>
                    <td>大家庭适用 收纳方便 天幕+自动帐篷二合一</td>
                    <td>轻便小巧 6级防风 高强度防水 通风透气</td>
                    <td>大空间、适合大家庭出游 6级防风 高强度防水 通风透气</td>
                  </tr>
                </tbody>
              </table>
              <small>价格：表中所示价格为租赁一晚（不超过24h）的价格。</small>
            </>
          )}

          {tentInfos[5].on && (
            <>
              <h5>露营活动策划书</h5>
              <small>
                <strong> 主办方：</strong>
                XX中学初二1班
              </small>
              <small>
                <strong>活动时间：</strong>
                20XX年5月9日-5月10日
              </small>
              <small>
                <strong>活动地点：</strong>
                上庄水库
              </small>
              <small>
                <strong>活动主题：</strong>
                亲近自然
              </small>
              <small>
                <strong>活动目的：</strong>
                培养学生亲近大自然，享受大自然的美丽。通过露营活动，锻炼学生体魄，培养良好的心理素质和团队协作精神。
              </small>
              <small>
                <strong>活动内容：</strong>
              </small>
              <table>
                <tbody>
                  <tr>
                    <th>时期</th>
                    <th>时间</th>
                    <th>活动</th>
                  </tr>
                  <tr>
                    <td rowSpan={6}>5月9日</td>
                    <td>10:00</td>
                    <td>集合 报数 合影 出发</td>
                  </tr>
                  <tr>
                    <td>12:00</td>
                    <td>到达目的地 吃午饭</td>
                  </tr>
                  <tr>
                    <td>14:00</td>
                    <td>到达目的地 吃午饭</td>
                  </tr>
                  <tr>
                    <td>17:00 </td>
                    <td>晚餐烧烤</td>
                  </tr>
                  <tr>
                    <td>19:00 </td>
                    <td>篝火晚会 </td>
                  </tr>
                  <tr>
                    <td>22:00 </td>
                    <td>休息</td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>5月10日</td>
                    <td>7:00</td>
                    <td>早餐和看日出 </td>
                  </tr>
                  <tr>
                    <td>9:00 </td>
                    <td>登山比赛 生态摄影 </td>
                  </tr>
                  <tr>
                    <td>11:00 </td>
                    <td>午餐 </td>
                  </tr>
                  <tr>
                    <td>12:00 </td>
                    <td>返程</td>
                  </tr>
                </tbody>
              </table>
              <small>
                <strong>经费预算：</strong>
              </small>
              <table>
                <tbody>
                  <tr>
                    <td>项目</td>
                    <td>预算</td>
                  </tr>
                  <tr>
                    <td>帐篷租赁</td>
                    <td>3000</td>
                  </tr>
                  <tr>
                    <td>炊具和餐具</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>食物</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>紧急药品</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>交通</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {tentInfos[6].on && (
            <>
              <h5>露营人员报名统计表</h5>
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}></th>
                    <th>男</th>
                    <th>女</th>
                    <th>总计</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>学生</td>
                    <td>13</td>
                    <td>12</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>成人</td>
                    <td>老师</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>家长</td>
                    <td>2</td>
                    <td>1</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>总计</td>
                    <td>16</td>
                    <td>14</td>
                    <td>30</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Info;
