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
            text="@小华  @小明 天悦电影院五一劳动节购票有优惠，假期我们去看电影怎么样？"
            image="/characters/me.png"
          />

          <ChatCard
            name="小华"
            role="notme"
            text="好！咱们看什么电影呢？我前天刚看了《谜》，感觉天悦电影院挺不错的。"
            image="/characters/peer1.png"
          />

          <ChatCard
            name="小乐妈妈"
            role="notme"
            text="你们要看什么电影呢？注意不要选择太血腥暴力的影片，要选择适合你们看的电影。"
            image="/characters/adult2.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小乐妈妈  妈妈，我选电影的时候会注意的。"
            image="/characters/me.png"
          />

          <ChatCard
            name="小明"
            role="notme"
            text="看电影太好了！但是，假期我每天上午九点到十点半要上钢琴课，其他时间都可以。"
            image="/characters/peer2.png"
          />

          <ChatCard
            name="小华爸爸"
            role="notme"
            text="不要太晚哦！虽然五一这几天天气不错，但是晚上10点之前必须回家。 我可以去接你们。"
            image="/characters/adult1.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小华爸爸 我订好票再告诉叔叔结束时间，谢谢叔叔去接我们。"
            image="/characters/me.png"
          />

          <ChatCard
            name="小华"
            role="notme"
            text="@小乐 那订票的事情就交给你啦，记得仔细看一下天悦的优惠活动，好像优惠票是限量的。咱们尽量买优惠票吧！"
            image="/characters/peer1.png"
          />

          <ChatCard
            name="小明"
            role="notme"
            text="@小乐 定完票记得把账单发在群里。"
            image="/characters/peer2.png"
          />

          <ChatCard
            name="小乐"
            role="me"
            text="@小华  @小明   我先比较一下价格确定看哪场，买好票吧具体信息发到群里！"
            image="/characters/me.png"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.chat}>
        <h5 className={styles["chat-header"]}>初二1班班群(30)</h5>
        <div className={styles["chat-body"]}>
          <ChatCard
            name="班主任"
            role="notme"
            text="同学们！目前，有30人确定确定参加这周末的露营活动。我负责安排活动策划，科学老师负责物资采购。"
            image="/characters/adult2.png"
          />

          <ChatCard
            name="班长"
            role="me"
            text="@班主任 老师，有什么是我们可以做的吗?"
            image="/characters/me.png"
          />

          <ChatCard
            name="科学老师"
            role="notme"
            text="确实有一个问题你们可以帮忙。露营地的老板介绍了几种可以租的帐篷，我们还没确定帐篷要怎么租，你们可以试试吗？"
            image="/characters/adult1.png"
          />

          <ChatCard
            name="班长"
            role="me"
            text="@科学老师 我可以组织同学们一起合作来解决这个问题，老板可以提供什么帐篷呢？"
            image="/characters/me.png"
          />

          <ChatCard
            name="科学老师"
            role="notme"
            text="这是宣传单，现在上面显示的是截至今天的库存，我们要尽快做决定。"
            textImage="/images/tent.png"
            image="/characters/adult1.png"
          />

          <ChatCard
            name="班长"
            role="me"
            text="@科学老师 好的，老师，我会组织同学们做一下计划的。"
            image="/characters/me.png"
          />

          <ChatCard
            name="班主任"
            role="notme"
            text="@班长 注意帐篷租用的预算啊。加油！相信你们会有很好的方案。"
            image="/characters/adult2.png"
          />
        </div>
      </div>
    );
  }
}

export default Chat;
