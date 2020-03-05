$(".carousel-inner .carousel-item").each((_, e) => {
  const el = $(e);
  const imgUrl = el.data("url");
  if (imgUrl) {
    const w = Math.floor((el.width() * 1) / 100) * 100;
    const h = Math.floor((el.height() * 1) / 100) * 100;
    el.css({
      "background-image": `url('${imgUrl}?w=${w}&h=${h}&fit=crop&fm=webp&q=80')`,
      "background-size": "cover",
      "background-size": "cover",
      "background-position-x": "center",
      "background-position-y": "center"
    });
  }
});
