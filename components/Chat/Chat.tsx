import React from "react";
import styles from "./Chat.module.scss";
import ChatCard from "../ChatCard/ChatCard";

function Chat({ type }: { type: string }) {
  if (type === "movie") {
    return (
      <div className={styles.chat}>
        <h5 className={styles["chat-header"]}>假期安排讨论群（6）</h5>
        <div className={styles["chat-body"]}>
          <ChatCard
            name="小乐"
            role="me"
            text="@小华  @小明 天悦电影院五一劳动节购票有优惠，假期我们去看电影怎么样？（图片）"
            image="/characters/xiaole.png"
          />

          <ChatCard
            name="小华"
            role="notme"
            text="好！咱们看什么电影呢？我前天刚看了《谜》，感觉天悦电影院挺不错的。"
            image="/characters/xiaohua.png"
          />

          <ChatCard
            name="小乐妈妈"
            role="notme"
            text="你们要看什么电影呢？注意不要选择太血腥暴力的影片，要选择适合你们看的电影。"
            image="/characters/xiaolemama.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小乐妈妈  妈妈，我买票的时候会注意的。"
            image="/characters/xiaole.png"
          />

          <ChatCard
            name="小明"
            role="notme"
            text="看电影太好了！但是，假期我每天上午九点到十点半要上钢琴课，其他时间都可以。"
            image="/characters/xiaoming.png"
          />

          <ChatCard
            name="小华爸爸"
            role="notme"
            text="不要太晚哦！虽然五一这几天天气不错，但是晚上10点之前必须回家。 我可以去接你们。"
            image="/characters/xiaohuababa.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小华爸爸 我订好票再告诉叔叔结束时间，谢谢叔叔去接我们。"
            image="/characters/xiaole.png"
          />

          <ChatCard
            name="小华"
            role="notme"
            text="@小乐 那订票的事情就交给你啦，记得仔细看一下天悦的优惠活动，好像优惠票是限量的。咱们尽量买优惠票吧！"
            image="/characters/xiaohua.png"
          />

          <ChatCard
            name="小明"
            role="notme"
            text="@小乐 定完票记得把账单发在群里。"
            image="/characters/xiaoming.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小华 @小明 我先比较一下价格确定看哪场，然后咱们就尽快买票！"
            image="/characters/xiaole.png"
          />
        </div>
      </div>
    );
  } else {
    return <div className={styles.chat}></div>;
  }
}

export default Chat;
